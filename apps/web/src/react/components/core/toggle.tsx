"use client";

import { ToggleGroup as ToggleGroupPrimitives } from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { ToggleGroup } from "./toggle-group";

const toggleItemStyle = cva(
  "focus-visible:ring-ring inline-flex items-center justify-center text-sm font-medium transition-colors first:rounded-l last:rounded-r hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-gray-200 data-[state=off]:hover:bg-gray-50",
  {
    variants: {
      variant: {
        plain: "bg-transparent",
        outline:
          "border-y border-l border-gray-300 bg-transparent last:border-r hover:bg-gray-300",
      },
      size: {
        xs: "h-7 min-w-7",
        sm: "h-8 min-w-8",
        md: "h-9 min-w-9",
        lg: "h-10 min-w-10",
        xl: "h-11 min-w-11",
      },
    },
    defaultVariants: {
      variant: "plain",
      size: "md",
    },
  }
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
      className={toggleItemStyle({ variant, size })}
      {...props}
    >
      {children}
    </ToggleGroupPrimitives.Item>
  </ToggleGroup>
));

Toggle.displayName = "Toggle";

export { Toggle };
