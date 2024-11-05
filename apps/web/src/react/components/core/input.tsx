"use client";
import { Field as FieldPrimitives } from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

export const inputStyle = cva(
  "w-full rounded-sm px-2.5 text-neutral-800 outline-none focus:border-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 data-[invalid]:border-red-500",
  {
    variants: {
      variant: {
        outline: "border border-neutral-400 bg-transparent",
        ghost: "border border-neutral-200 bg-neutral-100",
        plain: "bg-transparent",
      },
      size: {
        sm: "h-9 text-xs",
        md: "h-10 text-sm",
        lg: "h-11",
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
