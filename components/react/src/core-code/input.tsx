export const reactInputCode = `"use client";
import { Field as FieldPrimitives } from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

export const inputStyle = cva(
  "text-base-800 focus:border-primary-500 w-full px-2.5 outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[invalid]:border-red-500",
  {
    variants: {
      variant: {
        outline: "border-base-400 border bg-transparent",
        soft: "bg-base-100",
        plain: "bg-transparent",
      },
      size: {
        sm: "h-9 rounded-sm text-xs",
        md: "h-10 rounded-[3px] text-sm",
        lg: "h-11 rounded",
      },
      colorScheme: {
        red: "",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  },
);

export const Input = forwardRef<
  React.ElementRef<typeof FieldPrimitives.Input> &
    VariantProps<typeof inputStyle>,
  Omit<React.ComponentPropsWithoutRef<typeof FieldPrimitives.Input>, "size"> &
    VariantProps<typeof inputStyle>
>(({ variant, size, ...props }, ref) => (
  <FieldPrimitives.Input
    ref={ref}
    className={inputStyle({ variant, size })}
    {...props}
  />
));

Input.displayName = "Input";
`