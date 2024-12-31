export const formExampleCode = `"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../core/button";
import {
  Form,
  FormControl,
  FormField,
  FormFieldErrorMessage,
  FormFieldHelperText,
  FormItem,
  FormLabel,
} from "../core/form";
import { Input } from "../core/input";

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
                    <Input {...field} />
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
                    <Input type="password" {...field} />
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
`