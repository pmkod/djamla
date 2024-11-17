export const iconButtonCode = `"use client";
import { ark } from "@ark-ui/react";
import { IconLoader2 } from "@tabler/icons-react";
import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentPropsWithoutRef, forwardRef } from "react";

const iconButtonStyle = cva(
  "relative ring-offset-background focus-visible:ring-ring inline-flex aspect-square items-center justify-center whitespace-nowrap disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none overflow-hidden",
  {
    variants: {
      variant: {
        solid: "",
        outline: "border border-base-300 bg-transparent hover:bg-base-100",
        ghost: "bg-transparent hover:bg-base-100",
        plain: "",
      },
      colorScheme: {
        primary: "",
        red: "",
        black: "",
      },
      size: {
        xs: "h-8 rounded-sm",
        sm: "h-9 rounded-sm",
        md: "h-10 rounded-[3px]",
        lg: "h-11 rounded",
        xl: "h-12 rounded",
      },
      disabled: {
        true: "opacity-50",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "primary",
        className: "bg-primary-500 hover:bg-primary-600 text-white",
      },
      {
        variant: "outline",
        colorScheme: "primary",
        className: "text-primary-500",
      },
      {
        variant: "ghost",
        colorScheme: "primary",
        className: "text-primary-600",
      },
      {
        variant: "plain",
        colorScheme: "primary",
        className: "text-primary-700",
      },
      {
        variant: "solid",
        colorScheme: "red",
        className: "bg-red-500 hover:bg-red-600 text-white",
      },
      {
        variant: "outline",
        colorScheme: "red",
        className: "text-red-500",
      },
      {
        variant: "ghost",
        colorScheme: "red",
        className: "text-red-600",
      },
      {
        variant: "plain",
        colorScheme: "red",
        className: "text-red-500 hover:bg-base-100",
      },
      {
        variant: "solid",
        colorScheme: "black",
        className: "bg-base-800 hover:bg-base-900 text-base-0",
      },
      {
        variant: "outline",
        colorScheme: "black",
        className: "text-base-900",
      },
      {
        variant: "ghost",
        colorScheme: "black",
        className: "text-base-900",
      },
      {
        variant: "plain",
        colorScheme: "black",
        className: "text-base-900 hover:bg-base-100",
      },
    ],
    defaultVariants: {
      variant: "solid",
      colorScheme: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

interface IconButtonProps
  extends ComponentPropsWithoutRef<typeof ark.button>,
    Omit<VariantProps<typeof iconButtonStyle>, "disabled"> {
  isLoading?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant,
      size,
      colorScheme,
      children,
      fullWidth,
      isLoading,
      ...props
    }: IconButtonProps,
    ref
  ) => {
    if (isLoading) {
      props.disabled = true;
    }
    return (
      <ark.button
        className={iconButtonStyle({
          size,
          variant,
          colorScheme,
          fullWidth,
        })}
        {...props}
        ref={ref}
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

IconButton.displayName = "IconButton";
`;
