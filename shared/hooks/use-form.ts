import {
  useForm as useReactHookForm,
  UseFormProps,
  FieldValues,
} from "react-hook-form";
import { ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type UseFormOptions<T extends FieldValues> = UseFormProps<T> & {
  schema: ZodSchema<T>;
};

export function useForm<T extends FieldValues>(options: UseFormOptions<T>) {
  const { schema, ...rest } = options;

  const resolver = zodResolver(schema);

  const form = useReactHookForm<T>({
    resolver,
    ...rest,
  });

  return form;
}
