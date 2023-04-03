import { z } from "zod";

const envSchema = z.object({
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_SECRET: z.string(),
});

export const { GITHUB_CLIENT_ID, GITHUB_SECRET } = envSchema.parse(process.env);
