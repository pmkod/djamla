export const passwordResetFormOneCode = `"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormFieldHelperText,
  FormField,
  FormItem,
  FormLabel,
  FormFieldErrorMessage,
} from "../core/form";
import { Input } from "../core/input";
import { Button } from "../core/button";

const passwordResetFormSchema = z.object({
  email: z.string().email(),
});

const PasswordResetFormOne = () => {
  const form = useForm<z.infer<typeof passwordResetFormSchema>>({
    resolver: zodResolver(passwordResetFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof passwordResetFormSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center px-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="border-base-300 w-[480px] max-w-full rounded-sm sm:border sm:px-10 sm:pb-12 sm:pt-8"
        >
          <div className="mb-5">
            <div className="mb-0.5 text-3xl font-semibold">
              Reset your password
            </div>
            <p className="text-base-500">
              Enter your email to reset your password
            </p>
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
          <div className="mt-5">
            <Button type="submit" fullWidth colorScheme="primary">
              Send
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export { PasswordResetFormOne };
`;
