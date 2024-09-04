import { AuthError } from "next-auth";

export function authErrorMapper(error: unknown): { error: string } {
  if (error instanceof AuthError) {
    switch (error.type) {
      case "CredentialsSignin":
        return { error: "Invalid email or password" };

      case "CallbackRouteError":
        return { error: "Invalid email or password" };

      default:
        return { error: "Something went wrong" };
    }
  }

  throw error;
}
