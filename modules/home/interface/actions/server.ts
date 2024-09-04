"use server";

import { signIn } from "@/lib/auth";
import { LoginFormType } from "modules/home/infra/types/login-form";
import { authErrorMapper } from "shared/mappers/auth-error.mapper";

export async function foo(data: LoginFormType & { redirectTo: string }) {
  try {
    await signIn("credentials", { ...data })
  } catch (error) {
    const { error: mapped } = authErrorMapper(error);
    return mapped;
  }
}
