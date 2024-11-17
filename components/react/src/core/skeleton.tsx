import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const skeletonStyle = cva("bg-base-200 animate-pulse", {
  variants: {
    rounded: {
      xs: "rounded-sm",
      sm: "rounded-sm",
      default: "rounded",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    rounded: "default",
  },
});

type SizeProperty =
  | number
  | `${number}${"%" | "px" | "cm" | "mm" | "rem" | "vh" | "vw"}`;

interface SkeletonProps extends VariantProps<typeof skeletonStyle> {
  width: SizeProperty;
  height: SizeProperty;
  flex?: number;
}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ width, height, rounded, flex, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={skeletonStyle({ rounded })}
        style={{
          width,
          height,
          flex,
        }}
        {...props}
      />
    );
  },
);

Skeleton.displayName = "Skeleton";

export { Skeleton };
