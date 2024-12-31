export const checkboxCode = `"use client";
import { Checkbox as CheckboxPrimitives } from "@ark-ui/react";
import { IconCheck } from "@tabler/icons-react";
import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";

const checkboxControlStyle = cva(
  "data-[state=unchecked]:border-base-400 data-[state=unchecked]:hover:bg-base-100 inline-flex cursor-pointer rounded-sm border data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      size: {
        sm: "size-4",
        md: "size-5",
        lg: "size-6",
        xl: "size-7",
      },
      colorScheme: {
        primary:
          "data-[state=checked]:border-primary-500 data-[state=checked]:bg-primary-500 text-white",
        black:
          "data-[state=checked]:border-base-800 data-[state=checked]:bg-base-800 text-white",
      },
    },

    defaultVariants: {
      size: "md",
      colorScheme: "primary",
    },
  },
);

const Checkbox = forwardRef<
  React.ElementRef<typeof CheckboxPrimitives.Root> &
    VariantProps<typeof checkboxControlStyle>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitives.Root> &
    VariantProps<typeof checkboxControlStyle>
>(({ size, colorScheme, className, ...props }, ref) => {
  return (
    <CheckboxPrimitives.Root ref={ref} {...props}>
      <CheckboxPrimitives.Control
        className={checkboxControlStyle({
          size,
          colorScheme,
          className,
        })}
      >
        <CheckboxPrimitives.Indicator className="p-0.5">
          <IconCheck className="h-full w-full" />
        </CheckboxPrimitives.Indicator>
      </CheckboxPrimitives.Control>
      <CheckboxPrimitives.HiddenInput />
    </CheckboxPrimitives.Root>
  );
});

Checkbox.displayName = "Checkbox";

export { Checkbox };
`