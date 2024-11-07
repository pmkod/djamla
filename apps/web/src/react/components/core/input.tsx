"use client";
import { Field as FieldPrimitives } from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

export const inputStyle = cva(
  "w-full  px-2.5 text-base-800 outline-none focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50 data-[invalid]:border-red-500",
  {
    variants: {
      variant: {
        outline: "border border-base-400 bg-transparent",
        ghost: "border border-base-200 bg-base-100",
        plain: "bg-transparent",
      },
      size: {
        sm: "h-9 text-xs rounded-sm",
        md: "h-10 text-sm rounded-[3px]",
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
  }
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
