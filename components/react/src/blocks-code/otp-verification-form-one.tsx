export const reactOtpVerificationFormOneCode = `"use client";
import { PinInputValueChangeDetails } from "@ark-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../core/form";
import { PinInput } from "../core/pin-input";

const otpLength = 6;

const otpVerificationFormSchema = z.object({
  otp: z.string().length(otpLength),
});

const OtpVerificationFormOne = () => {
  const form = useForm<z.infer<typeof otpVerificationFormSchema>>({
    resolver: zodResolver(otpVerificationFormSchema),
    defaultValues: {
      otp: "",
    },
  });
  const onSubmit = (values: z.infer<typeof otpVerificationFormSchema>) => {
    console.log(values);
  };
  const handleValueComplete = ({
    valueAsString,
  }: PinInputValueChangeDetails) => {
    console.log(valueAsString);
  };
  return (
    <div className="flex h-screen w-full items-center justify-center px-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="border-base-300 w-max max-w-full rounded-sm sm:border sm:px-10 sm:pb-12 sm:pt-8"
        >
          <div className="text-base-900 mb-0.5 text-3xl font-semibold">
            Otp verification
          </div>
          <p className="text-base-500">Enter the code you received</p>
          <div className="mt-7">
            <PinInput
              length={otpLength}
              onValueComplete={handleValueComplete}
            />
          </div>

          <div className="mt-6 flex justify-end">
            <button className="text-primary-500 hover:bg-base-100 px-0.5 text-sm font-medium">
              Resend code
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export { OtpVerificationFormOne };
`