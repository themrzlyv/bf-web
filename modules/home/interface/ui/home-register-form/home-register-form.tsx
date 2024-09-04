"use client";
import React from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Alert, Typography } from "ui";
import { registerSchema } from "modules/home/data/schemas";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "shared/hooks/use-form";
import { RegisterFormType } from "modules/home/infra/types/register-form";
import { register } from "../../actions/register.action";
import Link from "next/link";

export const HomeRegisterForm = () => {
  const [isPending, startTransition] = React.useTransition();

  const form = useForm<RegisterFormType>({
    schema: registerSchema,
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const data = form.getValues();

  const onSubmit = () => {
    startTransition(() => {
      register(data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    });
  };

  return (
    <div className="w-1/2 flex h-screen">
      <div className="flex flex-1 flex-col items-center justify-center">
        <Typography variant="large">Sign up</Typography>

        <Form {...form}>
          <form>
            <div className="space-y-4">
              <Alert
                description="Invalid email or password"
                type="error"
                icon={<ExclamationTriangleIcon color="red" />}
                containerClassName="w-full my-2"
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <Typography variant="p">Name</Typography>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="name"
                        type="text"
                        className="w-80 placeholder:font-thin placeholder:text-sm placeholder:text-gray-500"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Typography variant="p">Email</Typography>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Enter your email"
                        type="text"
                        className="w-80 placeholder:font-thin placeholder:text-sm placeholder:text-gray-500"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <Typography variant="p">Password</Typography>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Enter your password"
                        type="text"
                        className="w-80 placeholder:font-thin placeholder:text-sm placeholder:text-gray-500"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="button"
              className="w-full mt-10"
              disabled={isPending}
              onClick={onSubmit}
            >
              Sign up
            </Button>
          </form>
        </Form>
        <div className="flex flex-row w-80 mt-8 justify-start items-center">
          <Typography variant="small">
            Already have an account?{" "}
            <Link href="/" className="text-primary-default">
              Sign in
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};
