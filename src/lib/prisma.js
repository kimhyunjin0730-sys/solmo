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

  return new PrismaClient({
    accelerateUrl: url,
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  }).$extends(withAccelerate());
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
