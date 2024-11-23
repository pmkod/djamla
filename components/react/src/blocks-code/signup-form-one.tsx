export const signupFormOneCode = `"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormFieldErrorMessage,
} from "../core/form";
import { Input } from "../core/input";
import { Button } from "../core/button";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

const signupFormSchema = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  email: z.string().email(),
  password: z.string().min(12).max(100),
});

const SignupFormOne = () => {
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof signupFormSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center px-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="border-base-300 w-[480px] max-w-full rounded-sm sm:border sm:px-10 sm:pb-12 sm:pt-8"
        >
          <div className="mb-0.5 text-3xl font-semibold">Sign up</div>
          <p className="text-base-500">
            Create an account by entering your first name, last name, email and
            a password
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
              <IconBrandGithub className="mr-2" /> Github
            </Button>
          </div>

          <div className="relative mt-5">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-base-0 text-muted-foreground px-2">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <div className="flex gap-x-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormFieldErrorMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormFieldErrorMessage />
                  </FormItem>
                )}
              />
            </div>

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
          <div className="mt-5">
            <Button type="submit" fullWidth colorScheme="primary">
              Sign up
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export { SignupFormOne };
`;
