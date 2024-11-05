import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef, HTMLAttributes } from "react";

const loaderStyle = cva(
  "inline-block animate-spin rounded-full border-current border-t-transparent",
  {
    variants: {
      size: {
        sm: "size-6 border-2",
        md: "size-7 border-[3px]",
        lg: "size-9 border-4",
        xl: "size-10 border-[5px]",
      },

      colorScheme: {
        primary: "border-indigo-600",
        red: "border-red-600",
        black: "border-neutral-900",
        green: "border-green-500",
      },
    },
    defaultVariants: {
      size: "md",
      colorScheme: "primary",
    },
  }
);

interface LoaderProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loaderStyle> {}

const Loader = forwardRef<HTMLDivElement, LoaderProps>(
  ({ colorScheme, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={loaderStyle({
          size,
          colorScheme,
        })}
        role="status"
        aria-label="loading"
        {...props}
      ></div>
    );
  }
);

Loader.displayName = "Loader";

export { Loader };
