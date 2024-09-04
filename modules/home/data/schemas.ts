import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(6)
    .email(),
  password: z.string().min(6),
});

export const registerSchema = z.object({
  email: z.string().min(6).email(),
  name: z.string().min(2),
  password: z.string().min(6),
});
