import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

/**
 * Lazy-initialized Prisma client.
 *
 * Strategy: Prisma 7 removed the `datasources` constructor option.
 * For Prisma Postgres / Accelerate (db.prisma.io or any prisma+postgres://
 * URL) we MUST pass `accelerateUrl` to the constructor and apply
 * the withAccelerate() extension.
 *
 * Plain postgres:// URLs that point at db.prisma.io are Accelerate
 * URLs and just need the protocol prefix swapped.
 */

type ExtendedPrisma = ReturnType<typeof createPrisma>;

const globalForPrisma = globalThis as unknown as {
  prisma?: ExtendedPrisma;
};

function normalizeAccelerateUrl(rawUrl: string | undefined): string | null {
  if (!rawUrl) return null;
  if (
    rawUrl.startsWith('prisma://') ||
    rawUrl.startsWith('prisma+postgres://')
  ) {
    return rawUrl;
  }
  if (rawUrl.startsWith('postgres://')) {
    return 'prisma+' + rawUrl;
  }
  if (rawUrl.startsWith('postgresql://')) {
    return 'prisma+postgres://' + rawUrl.slice('postgresql://'.length);
  }
  return rawUrl;
}

function createPrisma() {
  const rawUrl =
    process.env.DATABASE_URL ||
    process.env.PRISMA_DATABASE_URL ||
    process.env.POSTGRES_URL;

  if (!rawUrl) {
    throw new Error('DATABASE_URL is not set');
  }

  const url = normalizeAccelerateUrl(rawUrl);
  if (!url) {
    throw new Error('DATABASE_URL could not be normalized');
  }

  const client = new PrismaClient({
    // accelerateUrl is part of Prisma 7's Postgres adapter — keep as any
    // to avoid pinning to internal types that may shift between minor versions.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...({ accelerateUrl: url } as any),
    log:
      process.env.NODE_ENV === 'development'
        ? ['error', 'warn']
        : ['error'],
  });

  return client.$extends(withAccelerate());
}

export function getPrisma(): ExtendedPrisma {
  if (globalForPrisma.prisma) return globalForPrisma.prisma;
  const client = createPrisma();
  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = client;
  }
  return client;
}

/**
 * Convenience proxy that lazily resolves to the real client.
 * Existing code can keep doing `prisma.inquiry.create(...)`.
 */
export const prisma = new Proxy(
  {} as ExtendedPrisma,
  {
    get(_target, prop: string | symbol) {
      const client = getPrisma() as unknown as Record<string | symbol, unknown>;
      const value = client[prop];
      return typeof value === 'function'
        ? (value as (...args: unknown[]) => unknown).bind(client)
        : value;
    },
  }
) as ExtendedPrisma;
