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

function normalizeAccelerateUrl(rawUrl) {
  if (!rawUrl) return null;
  // Already in the prisma protocol form — use as-is
  if (rawUrl.startsWith("prisma://") || rawUrl.startsWith("prisma+postgres://")) {
    return rawUrl;
  }
  // Convert standard postgres:// or postgresql:// to prisma+postgres://
  // (Prisma Postgres / Accelerate accepts the same host+credentials with this scheme)
  if (rawUrl.startsWith("postgres://")) {
    return "prisma+" + rawUrl;
  }
  if (rawUrl.startsWith("postgresql://")) {
    return "prisma+postgres://" + rawUrl.slice("postgresql://".length);
  }
  return rawUrl;
}

function createPrisma() {
  const rawUrl =
    process.env.DATABASE_URL ||
    process.env.PRISMA_DATABASE_URL ||
    process.env.POSTGRES_URL;

  if (!rawUrl) {
    throw new Error("DATABASE_URL is not set");
  }

  const url = normalizeAccelerateUrl(rawUrl);

  const client = new PrismaClient({
    accelerateUrl: url,
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

  return client.$extends(withAccelerate());
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
