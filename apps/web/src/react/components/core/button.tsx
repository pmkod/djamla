"use client";

import { ComponentPropsWithRef, forwardRef } from "react";
import { ark } from "@ark-ui/react";
import { IconLoader2 } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonStyle = cva(
  "relative inline-flex items-center overflow-hidden justify-center whitespace-nowrap font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        solid: "",
        outline: "bg-transparent hover:bg-base-100 border border-base-300",
        ghost: "bg-transparent hover:bg-base-100",
      },
      colorScheme: {
        primary: "",
        black: "",
        red: "",
      },
      size: {
        xs: "h-7 rounded-sm px-2.5 text-xs",
        sm: "h-9 rounded-sm px-3 text-sm",
        md: "h-10 px-3.5 rounded-[3px] text-base",
        lg: "h-11 rounded px-5 text-lg",
        xl: "h-12 rounded px-8 text-lg",
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
        className: "text-primary-500",
      },
      //
      {
        variant: "solid",
        colorScheme: "red",
        className: "bg-red-500 hover:bg-red-600 text-white",
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
        className: "bg-neutral-900 hover:bg-neutral-950 text-base-0",
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
      fullWidth,
      ...props
    },
    ref
  ) => {
    if (isLoading) {
      props.disabled = true;
    }
    return (
      <ark.button
        className={buttonStyle({
          variant,
          size,
          colorScheme,
          className,
          fullWidth,
        })}
        ref={ref}
        {...props}
      >
        <div className="size-full flex items-center justify-center cursor-pointer pb-px">
          {children}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-inherit">
              <IconLoader2 className="h-1/2 aspect-square animate-spin" />
            </div>
          )}
        </div>
      </ark.button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonStyle };
export type { ButtonProps };
