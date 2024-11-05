"use client";

import { ComponentPropsWithRef, forwardRef } from "react";
import { ark } from "@ark-ui/react";
import { IconLoader2 } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonStyle = cva(
  "relative inline-flex items-center overflow-hidden justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        solid: "text-white",
        outline: "bg-transparent hover:bg-gray-100 border border-gray-300",
        ghost: "bg-transparent hover:bg-gray-100",
      },
      colorScheme: {
        primary: "",
        black: "",
        red: "",
      },
      size: {
        xs: "h-7 rounded-sm px-1.5",
        sm: "h-9 rounded-sm px-3",
        md: "h-10 px-4 rounded",
        lg: "h-11 rounded px-5",
        xl: "h-12 rounded px-8",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "primary",
        className: "bg-indigo-500 hover:bg-indigo-600",
      },
      {
        variant: "outline",
        colorScheme: "primary",
        className: "text-indigo-500",
      },
      {
        variant: "ghost",
        colorScheme: "primary",
        className: "text-indigo-500",
      },
      //
      {
        variant: "solid",
        colorScheme: "red",
        className: "bg-red-500 hover:bg-red-600",
      },
      {
        variant: "outline",
        colorScheme: "red",
        className: "text-red-600",
      },
      {
        variant: "ghost",
        colorScheme: "red",
        className: "text-red-600",
      },
      //
      {
        variant: "solid",
        colorScheme: "black",
        className: "bg-neutral-900 hover:bg-neutral-950",
      },
      {
        variant: "outline",
        colorScheme: "black",
        className: " text-neutral-900",
      },
      {
        variant: "ghost",
        colorScheme: "black",
        className: "text-neutral-900",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorScheme: "primary",
    },
  }
);

interface ButtonProps
  extends ComponentPropsWithRef<typeof ark.button>,
    VariantProps<typeof buttonStyle> {
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      colorScheme,
      children,
      isLoading,
      disabled,
      fullWidth,
      ...props
    },
    ref
  ) => {
    return (
      <ark.button
        className={buttonStyle({
          variant,
          size,
          colorScheme,
          className,
          fullWidth,
        })}
        disabled={disabled || isLoading || false}
        ref={ref}
        {...props}
      >
        {children}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-inherit">
            <IconLoader2 className="h-1/2 aspect-square animate-spin" />
          </div>
        )}
      </ark.button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonStyle };
