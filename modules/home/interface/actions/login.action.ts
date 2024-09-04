import { handleSubmit } from "@/lib/handle-submit";
import { store } from "@/lib/store";
import { loginSchema } from "modules/home/data/schemas";
import { LoginFormType } from "modules/home/infra/types/login-form";
import { DEFAULT_LOGIN_REDIRECT_URL } from "routes";
import { setCredentialError, setFormError } from "../stores/login.slice";
import { foo } from "./server";

export const login = async (data: LoginFormType) => {
  const result = handleSubmit(loginSchema, data);

  if (!result.isValid) {
    store.dispatch(setFormError(result.errors));
    return;
  }

  const { email, password } = result.values;

  foo({ email, password, redirectTo: DEFAULT_LOGIN_REDIRECT_URL })
    .then(() => {
      store.dispatch(setCredentialError(null));
      store.dispatch(setFormError(null));
    })
    .catch(err => {
      console.log(err, "catch amkeeee");
      store.dispatch(setCredentialError(err));
    });
};
