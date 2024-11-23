export const textareaCode = `"use client";
import React, { forwardRef } from "react";
import { Field as FieldPrimitives } from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";

export const textareaStyle = cva(
  "text-base-800 focus:border-primary-500 w-full resize-none rounded-sm px-2.5 py-1.5 outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[invalid]:border-red-500",
  {
    variants: {
      variant: {
        outline: "border-base-400 border bg-transparent",
        soft: "bg-base-100",
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
  },
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
`