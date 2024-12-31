export const newPasswordFormOneCode = `"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const passwordValidationSchema = z.string().min(12).max(100);
const newPasswordFormSchema = z.object({
  newPassword: passwordValidationSchema,
  newPasswordConfirmation: passwordValidationSchema,
});

const NewPasswordFormOne = () => {
  const form = useForm<z.infer<typeof newPasswordFormSchema>>({
    resolver: zodResolver(newPasswordFormSchema),
    defaultValues: {
      newPassword: "",
      newPasswordConfirmation: "",
    },
  });

  const onSubmit = (values: z.infer<typeof newPasswordFormSchema>) => {
    if (values.newPassword !== values.newPasswordConfirmation) {
      form.setError("newPasswordConfirmation", {
        message: "Password don't match",
      });
      return;
    }
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
            <div className="text-base-900 mb-0.5 text-3xl font-semibold">
              New password
            </div>
            <p className="text-base-500">Choose your new password</p>
          </div>
          <div className="space-y-3">
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormFieldErrorMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPasswordConfirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm new password</FormLabel>
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
              Send
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export { NewPasswordFormOne };
`