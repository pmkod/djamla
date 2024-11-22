"use client";
import { ark } from "@ark-ui/react";
import { ComponentPropsWithRef, forwardRef } from "react";
import { IconLoader2 } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonStyle = cva(
  "focus-visible:ring-ring relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        solid: "",
        outline: "hover:bg-base-100 border-base-300 border bg-transparent",
        ghost: "hover:bg-base-100 bg-transparent",
      },
      colorScheme: {
        primary: "",
        black: "",
        red: "",
      },
      size: {
        xs: "h-7 rounded-sm px-2.5 text-xs",
        sm: "h-9 rounded-sm px-3 text-sm",
        md: "h-10 rounded-[3px] px-3.5 text-base",
        lg: "h-11 rounded px-5 text-lg",
        xl: "h-12 rounded px-8 text-lg",
      },
      fullWidth: {
        true: "w-full",
      },
      disabled: {
        true: "pointer-events-none opacity-50",
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
        className: "text-primary-500",
      },
      //
      {
        variant: "solid",
        colorScheme: "red",
        className: "bg-red-500 text-white hover:bg-red-600",
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
        className: "bg-base-900 hover:bg-base-950 text-base-0",
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
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorScheme: "primary",
    },
  },
);

interface ButtonProps
  extends ComponentPropsWithRef<typeof ark.button>,
    Omit<VariantProps<typeof buttonStyle>, "disabled"> {
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
      fullWidth,
      disabled,
      ...props
    },
    ref,
  ) => {
    if (isLoading) {
      disabled = true;
    }
    return (
      <ark.button
        className={buttonStyle({
          variant,
          size,
          colorScheme,
          className,
          fullWidth,
          disabled,
        })}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {isLoading ? (
          <div className="">
            <div className="absolute inset-0 z-0 flex items-center justify-center bg-inherit">
              <IconLoader2 className="aspect-square h-1/2 animate-spin" />
            </div>
            <div className="opacity-0">{children}</div>
          </div>
        ) : (
          children
        )}
      </ark.button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonStyle };
export type { ButtonProps };
