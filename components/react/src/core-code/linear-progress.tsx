export const linearProgressCode = `"use client";
import { forwardRef } from "react";
import { Progress as ProgressPrimitives } from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";

const linearProgressStyle = cva(
  "w-full overflow-hidden rounded-full bg-base-200",
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
  }
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
          "duration-400 h-[inherit] w-[inherit] bg-primary-500 transition-all ease-linear " +
          className
        }
      />
    </ProgressPrimitives.Track>
  </ProgressPrimitives.Root>
));

LinearProgress.displayName = "LinearProgress";

export { LinearProgress };
`