import { LoginFormType } from "./../../modules/home/infra/types/login-form";
import bcrypt from "bcryptjs";
import { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { handleSubmit } from "./handle-submit";
import { loginSchema } from "modules/home/data/schemas";
import prisma from "./prisma-config";
import { NextResponse } from "next/server";

export default {
  providers: [
    GoogleProvider,
    Credentials({
      async authorize(credentials) {
        const result = handleSubmit(loginSchema, credentials as LoginFormType);

        if (!result.isValid) return null;

        const { email, password } = result.values;

        try {
          const user = await prisma.user.findUnique({
            where: {
              email,
            },
          });

          if (!user || !user.password) {
            throw new NextResponse("amkee", { status: 400 });
          }

          const passwordValid = await bcrypt.compare(password, user.password);
          if (!passwordValid) throw new Error("Invalid password");
          return user;
        } catch {
          throw new NextResponse("amkee", { status: 400 });
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
