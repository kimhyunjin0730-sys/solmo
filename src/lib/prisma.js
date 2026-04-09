import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

/**
 * Lazy-initialized Prisma client.
 *
 * Why lazy? At build time Next.js may import this module while collecting
 * page data, but we don't want to instantiate PrismaClient at module load —
 * that would force env vars to be present during build, and fail for
 * preview/static analysis steps. Instead, we construct on first call.
 */

const globalForPrisma = globalThis;

function createPrisma() {
  const url =
    process.env.DATABASE_URL ||
    process.env.PRISMA_DATABASE_URL ||
    process.env.POSTGRES_URL;

  const isAccelerate = url?.startsWith("prisma://") || url?.startsWith("prisma+postgres://");

  const options = {
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  };

  if (isAccelerate) {
    options.accelerateUrl = url;
  } else {
    options.datasources = {
      db: { url: url },
    };
  }

  const client = new PrismaClient(options);

  return isAccelerate ? client.$extends(withAccelerate()) : client;
}

export function getPrisma() {
  if (globalForPrisma.prisma) return globalForPrisma.prisma;
  const client = createPrisma();
  if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = client;
  }
  return client;
}

// Backward-compat default export for any existing imports
export const prisma = new Proxy(
  {},
  {
    get(_target, prop) {
      const client = getPrisma();
      const value = client[prop];
      return typeof value === "function" ? value.bind(client) : value;
    },
  }
);
