import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

/**
 * Lazy-initialized Prisma client for Prisma Postgres (Accelerate).
 *
 * Prisma 7 removed the `datasources` constructor option entirely.
 * For Prisma Postgres / Accelerate, you must pass `accelerateUrl` to
 * the PrismaClient constructor and apply the withAccelerate() extension.
 *
 * Lazy init is critical: at build time Next.js may import this module
 * while collecting page data, but env vars may not be present yet.
 * We construct on first call only.
 */

const globalForPrisma = globalThis;

function createPrisma() {
  const url =
    process.env.DATABASE_URL ||
    process.env.PRISMA_DATABASE_URL ||
    process.env.POSTGRES_URL;

  if (!url) {
    throw new Error("DATABASE_URL is not set");
  }

  const isAccelerate = url.startsWith("prisma://");

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
