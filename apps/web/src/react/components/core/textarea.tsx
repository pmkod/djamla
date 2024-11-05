"use client";
import React, { forwardRef } from "react";
import { Field as FieldPrimitives } from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";

export const textareaStyle = cva(
  "w-full resize-none rounded-sm px-2.5 py-1.5 text-neutral-800 outline-none focus:border-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 data-[invalid]:border-red-500",
  {
    variants: {
      variant: {
        outline: "border border-neutral-400 bg-transparent",
        ghost: "border border-neutral-200 bg-neutral-100",
        plain: "bg-transparent",
      },
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
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

export const Textarea = forwardRef<
  React.ElementRef<typeof FieldPrimitives.Textarea> &
    VariantProps<typeof textareaStyle>,
  Omit<
    React.ComponentPropsWithoutRef<typeof FieldPrimitives.Textarea>,
    "size"
  > &
    VariantProps<typeof textareaStyle>
>(({ variant, size, ...props }, ref) => (
  <FieldPrimitives.Textarea
    ref={ref}
    className={textareaStyle({ variant, size })}
    rows={5}
    {...props}
  />
));

Textarea.displayName = "Textarea";
