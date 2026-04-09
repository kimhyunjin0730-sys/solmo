import { defineConfig } from "prisma/config";

// Load .env only in local dev (Vercel injects env vars natively)
if (process.env.NODE_ENV !== "production" && !process.env.VERCEL) {
  try {
    // Optional dev-only dependency — wrapped in try so missing dotenv won't break build
    require("dotenv/config");
  } catch {}
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
