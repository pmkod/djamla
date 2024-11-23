"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { Button } from "../core/button";
import {
  Form,
  FormControl,
  FormField,
  FormFieldErrorMessage,
  FormItem,
  FormLabel,
} from "../core/form";
import { Input } from "../core/input";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(12).max(100),
});

const LoginFormOne = () => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center px-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="border-base-300 w-[480px] max-w-full rounded-sm sm:border sm:px-10 sm:pb-12 sm:pt-8"
        >
          <div className="text-base-900 mb-0.5 text-3xl font-semibold">
            Log in
          </div>
          <p className="text-base-500">
            Enter your email and your password to login to your account
          </p>
          <div className="mt-4 flex gap-x-2">
            <Button
              type="button"
              fullWidth
              variant="outline"
              colorScheme="black"
            >
              <IconBrandGoogle className="mr-2" /> Google
            </Button>
            <Button
              type="button"
              fullWidth
              variant="outline"
              colorScheme="black"
            >
              <IconBrandGithub className="mr-2" /> Google Github
            </Button>
          </div>

          <div className="relative mt-5">
            <div className="absolute inset-0 flex items-center">
              <span className="border-t-base-500 w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-base-0 text-base-500 px-2">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-4 space-y-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormFieldErrorMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormFieldErrorMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-end pt-0.5">
            <a
              href="#"
              className="text-base-500 hover:text-base-700 text-sm underline"
            >
              Forgot password ?
            </a>
          </div>
          <div className="mt-5">
            <Button type="submit" fullWidth colorScheme="primary">
              Log in
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export { LoginFormOne };
