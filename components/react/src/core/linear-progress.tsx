"use client";
import { Progress as ProgressPrimitives } from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const linearProgressStyle = cva(
  "bg-base-200 w-full overflow-hidden rounded-full",
  {
    variants: {
      size: {
        xs: "h-1.5",
        sm: "h-2",
        md: "h-2.5",
        lg: "h-3",
        xl: "h-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const LinearProgress = forwardRef<
  React.ElementRef<typeof ProgressPrimitives.Root> &
    VariantProps<typeof linearProgressStyle>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitives.Root> &
    VariantProps<typeof linearProgressStyle>
>(({ className, size, ...props }, ref) => (
  <ProgressPrimitives.Root ref={ref} {...props}>
    <ProgressPrimitives.Track className={linearProgressStyle({ size })}>
      <ProgressPrimitives.Range
        className={
          "duration-400 bg-primary-500 h-[inherit] w-[inherit] transition-all ease-linear " +
          className
        }
      />
    </ProgressPrimitives.Track>
  </ProgressPrimitives.Root>
));

LinearProgress.displayName = "LinearProgress";

export { LinearProgress };
