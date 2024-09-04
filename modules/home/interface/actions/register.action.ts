import { handleSubmit } from "@/lib/handle-submit";
import { registerSchema } from "modules/home/data/schemas";
import { RegisterFormType } from "modules/home/infra/types/register-form";

export const register = async (data: RegisterFormType) => {
  const result = handleSubmit(registerSchema, data);

  if (!result.isValid) {
    return result.errors;
  }

  try {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(result.values),
    });

    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
};
