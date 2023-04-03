import { z } from "zod";

const envSchema = z.object({
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_SECRET: z.string(),
  MONGO_URI: z.string(),
  AUTH_DB_NAME: z.string().default("next-auth"),
});

export const { GITHUB_CLIENT_ID, GITHUB_SECRET, MONGO_URI, AUTH_DB_NAME } =
  envSchema.parse(process.env);
