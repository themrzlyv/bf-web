import { login } from "../../actions/login.action";
import { useForm } from "shared/hooks/use-form";
import { loginSchema } from "modules/home/data/schemas";
import { LoginFormType } from "modules/home/infra/types/login-form";
import { useAppSelector } from "@/lib/hooks";
import { useMemo } from "react";
import { formErrorMapper } from "shared/mappers/form-error.mapper";

export function useHomeFormLogin() {
  const { form, credentialError } = useAppSelector(state => state.login) || {};

  const loginForm = useForm<LoginFormType>({
    schema: loginSchema,
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const data = loginForm.getValues();

  const handleSubmit = async () => {
    await login(data);
  };

  const error = useMemo(() => {
    if (form.errors) {
      return formErrorMapper(form.errors);
    }

    if (credentialError) {
      return credentialError;
    }

    return undefined;
  }, [form.errors, credentialError]);

  return {
    error,
    loginForm,
    isLoading: false,
    handleSubmit,
  };
}
