export const textareaCode = `"use client";
import { Field as FieldPrimitives } from "@ark-ui/solid";
import { cva, VariantProps } from "class-variance-authority";
import { splitProps } from "solid-js";

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

interface TextareaProps extends VariantProps<typeof textareaStyle> {

}

export const Textarea = (props: TextareaProps) => 
    
    {
        const [local, rest] = splitProps(props, ['variant', "size", "colorScheme"])
        return(
  <FieldPrimitives.Textarea
    class={textareaStyle({ variant: local.variant, size: local.size,class: local.colorScheme })}
    rows={5}
    {...rest}
  />
)};

`