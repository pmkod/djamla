"use client";
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
} from "../core/form";
import { Input } from "../core/input";
import { Button } from "../core/button";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(20).max(100),
});

export const FormExample = () => {
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
    <div className="w-full max-w-96">
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
  );
};
