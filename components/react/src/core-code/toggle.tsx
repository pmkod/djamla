export const reactToggleCode = `"use client";

import { ToggleGroup as ToggleGroupPrimitives } from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { ToggleGroup } from "./toggle-group";

const toggleItemStyle = cva(
  "focus-visible:ring-ring hover:bg-base-200 data-[state=on]:bg-base-200 data-[state=off]:hover:bg-base-50 text-base-800 inline-flex items-center justify-center text-sm font-medium transition-colors first:rounded-l last:rounded-r focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        plain: "bg-transparent",
        outline:
          "border-base-300 hover:bg-base-300 border-y border-l bg-transparent last:border-r",
      },
      size: {
        xs: "min-h-7 min-w-7",
        sm: "min-h-8 min-w-8",
        md: "min-h-9 min-w-9",
        lg: "min-h-10 min-w-10",
        xl: "min-h-11 min-w-11",
      },
    },
    defaultVariants: {
      variant: "plain",
      size: "md",
    },
  },
);

const Toggle = forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitives.Item> &
    VariantProps<typeof toggleItemStyle>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitives.Item> &
    VariantProps<typeof toggleItemStyle>
>(({ className, children, variant, size, ...props }, ref) => (
  <ToggleGroup>
    <ToggleGroupPrimitives.Item
      ref={ref}
      className={toggleItemStyle({ variant, size, className })}
      {...props}
    >
      {children}
    </ToggleGroupPrimitives.Item>
  </ToggleGroup>
));


export { Toggle };
`