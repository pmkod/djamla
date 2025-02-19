"use client";
import { Field as FieldPrimitives } from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

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

const NativeSelect = forwardRef<
  React.ElementRef<typeof FieldPrimitives.Select> &
    VariantProps<typeof selectStyle>,
  Omit<React.ComponentPropsWithoutRef<typeof FieldPrimitives.Select>, "size"> &
    VariantProps<typeof selectStyle>
>(({ variant, size, ...props }, ref) => (
  <FieldPrimitives.Select
    ref={ref}
    className={selectStyle({ variant, size })}
    {...props}
  />
));

NativeSelect.displayName = "NativeSelect";

export { NativeSelect };
