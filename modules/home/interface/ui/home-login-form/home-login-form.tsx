"use client";
import React from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Alert, Typography } from "ui";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useHomeFormLogin } from "./use-home-form-login";

export const HomeLoginForm = () => {
  const { isLoading, loginForm, handleSubmit, error } = useHomeFormLogin();
  return (
    <div className="w-1/2 flex h-screen">
      <div className="flex flex-1 flex-col items-center justify-center">
        <Typography variant="large">Sign in</Typography>

        <Form {...loginForm}>
          <form>
            <div className="space-y-4">
              {error && (
                <Alert
                  description={error}
                  type="error"
                  icon={<ExclamationTriangleIcon color="red" />}
                  containerClassName="my-2"
                />
              )}

              <FormField
                control={loginForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Typography variant="p">Email</Typography>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        placeholder="Enter your email"
                        type="text"
                        className="w-80 placeholder:font-thin placeholder:text-sm placeholder:text-gray-500"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={loginForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <Typography variant="p">Password</Typography>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
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
              disabled={isLoading}
              onClick={handleSubmit}
            >
              Sign in
            </Button>
          </form>
        </Form>
        <div className="flex flex-row w-80 mt-8 justify-start items-center">
          <Typography variant="small">
            Do not have an account?{" "}
            <Link href="/register" className="text-primary-default">
              Sign up
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};
