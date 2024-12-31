export const solidLinearProgressCode = `"use client";
import { Progress as ProgressPrimitives } from "@ark-ui/solid";
import { cva, VariantProps } from "class-variance-authority";
import { splitProps } from "solid-js";

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

interface LinearProgressProps extends ProgressPrimitives.RootProps ,  VariantProps<typeof linearProgressStyle> {}

const LinearProgress = (props: LinearProgressProps) => {
    const [local, restProps] = splitProps(props, ['size'])

    return (
        <ProgressPrimitives.Root {...props}>
          <ProgressPrimitives.Track class={linearProgressStyle({ size: local.size })}>
            <ProgressPrimitives.Range
              class={
                "duration-400 bg-primary-500 h-[inherit] w-[inherit] transition-all ease-linear "
              }
            />
          </ProgressPrimitives.Track>
        </ProgressPrimitives.Root>
      )
}

LinearProgress.displayName = "LinearProgress";

export { LinearProgress };
`