"use client";
import { Field as FieldPrimitives } from "@ark-ui/solid";
import { cva, VariantProps } from "class-variance-authority";
import { splitProps } from "solid-js";

const selectStyle = cva(
  "text-base-800 focus:border-primary-500 [&>option]:bg-base-0 w-full cursor-pointer rounded-sm px-2.5 disabled:cursor-not-allowed disabled:opacity-50 data-[invalid]:border-red-500",
  {
    variants: {
      variant: {
        outline: "border-base-400 border bg-transparent",
        soft: "bg-base-100",
        plain: "bg-transparent",
      },
      size: {
        sm: "h-9 text-xs",
        md: "h-10 text-sm",
        lg: "h-11",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  },
);

interface NativeSelectProps extends Omit<FieldPrimitives.SelectProps, "size">, VariantProps<typeof selectStyle> {

}

const NativeSelect = (props: NativeSelectProps) => {
    const [local, rest] = splitProps(props, ['variant', 'size'])
    return (
        <FieldPrimitives.Select
          class={selectStyle({ variant: local.variant, size: local.size })}
          {...rest}
        />
      )
}


export { NativeSelect };
