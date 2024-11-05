"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormFieldHelperText,
  FormField,
  FormItem,
  FormLabel,
  FormFieldErrorMessage,
} from "../../react/components/core/form";
import { Input } from "../../react/components/core/input";
import { Button } from "../../react/components/core/button";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(20).max(100),
});

const FormExamplePage = () => {
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
    <div className="p-20">
      <div className="w-96">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-5 space-y-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="kod" {...field} />
                    </FormControl>
                    <FormFieldHelperText>
                      This is your public display name.
                    </FormFieldHelperText>
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
                      <Input type="password" placeholder="kod" {...field} />
                    </FormControl>
                    <FormFieldErrorMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" fullWidth colorScheme="primary">
              Log in
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default FormExamplePage;
