"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const badgeStyle = cva(
  "focus:ring-ring inline-flex shrink-0 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        solid: "text-white",
        outline: "border-base-300 border bg-transparent",
        soft: "",
        plain: "bg-transparent",
      },

      colorScheme: {
        primary: "",
        black: "",
        red: "",
      },

      size: {
        sm: "px-1.5 py-px text-[10px] font-medium",
        md: "px-2.5 py-0.5 text-xs font-medium",
        lg: "px-3 py-0.5 text-sm font-semibold",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "primary",
        className: "bg-primary-500",
      },
      {
        variant: "outline",
        colorScheme: "primary",
        className: "text-primary-500",
      },
      {
        variant: "soft",
        colorScheme: "primary",
        className: "bg-primary-100 text-primary-500",
      },
      {
        variant: "plain",
        colorScheme: "primary",
        className: "text-primary-500",
      },
      {
        variant: "solid",
        colorScheme: "red",
        className: "bg-red-500",
      },
      {
        variant: "outline",
        colorScheme: "red",
        className: "text-red-600",
      },
      {
        variant: "soft",
        colorScheme: "red",
        className: "bg-red-100 text-red-600",
      },
      {
        variant: "plain",
        colorScheme: "red",
        className: "text-red-600",
      },
      {
        variant: "solid",
        colorScheme: "black",
        className: "bg-base-900",
      },
      {
        variant: "outline",
        colorScheme: "black",
        className: "text-base-900",
      },
      {
        variant: "soft",
        colorScheme: "black",
        className: "bg-base-100 text-base-900",
      },
      {
        variant: "plain",
        colorScheme: "black",
        className: "text-base-900",
      },
    ],
    defaultVariants: {
      variant: "solid",
      colorScheme: "primary",
      size: "md",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeStyle> {}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, colorScheme, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={badgeStyle({ variant, colorScheme, size, className })}
        {...props}
      />
    );
  },
);

export { Badge, badgeStyle };
