import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

/**
 * Lazy-initialized Prisma client.
 *
 * Strategy: Prisma 7 removed the `datasources` constructor option.
 * For Prisma Postgres / Accelerate (db.prisma.io or any prisma+postgres://
 * URL) we MUST pass `accelerateUrl` to the constructor and apply
 * the withAccelerate() extension.
 *
 * For a real direct Postgres URL (e.g. Neon, Supabase, vanilla
 * postgres://) we'd need a driver adapter — but as long as we're on
 * Prisma Postgres we route everything through Accelerate. Plain
 * postgres:// URLs that point at db.prisma.io are also Accelerate
 * URLs and just need the protocol prefix swapped.
 */

const globalForPrisma = globalThis;

function normalizeAccelerateUrl(rawUrl) {
  if (!rawUrl) return null;
  // Already in the right protocol form
  if (rawUrl.startsWith("prisma://") || rawUrl.startsWith("prisma+postgres://")) {
    return rawUrl;
  }
  // Swap protocol — Prisma Postgres / Accelerate accepts both forms
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
