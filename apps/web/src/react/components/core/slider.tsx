"use client";

import { Slider as SliderPrimitives } from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const defaultOrientation = "horizontal";

const sliderTrackStyle = cva("overflow-hidden rounded-full bg-neutral-200", {
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
    orientation: {
      vertical: "h-full",
      horizontal: "w-full",
    },
  },
  compoundVariants: [
    {
      size: "sm",
      orientation: "horizontal",
      className: "h-2",
    },
    {
      size: "md",
      orientation: "horizontal",
      className: "h-2.5",
    },
    {
      size: "lg",
      orientation: "horizontal",
      className: "h-3",
    },
    {
      size: "xl",
      orientation: "horizontal",
      className: "h-4",
    },

    //
    //

    {
      size: "sm",
      orientation: "vertical",
      className: "w-2",
    },
    {
      size: "md",
      orientation: "vertical",
      className: "w-2.5",
    },
    {
      size: "lg",
      orientation: "vertical",
      className: "w-3",
    },
    {
      size: "xl",
      orientation: "vertical",
      className: "w-4",
    },
  ],
  defaultVariants: {
    size: "md",
    orientation: defaultOrientation,
  },
});

const sliderRangeStyle = cva("bg-indigo-500", {
  variants: {
    orientation: {
      vertical: "w-full",
      horizontal: "h-full",
    },
  },

  defaultVariants: {
    orientation: defaultOrientation,
  },
});

const sliderThumbStyle = cva(
  "cursor-pointer rounded-full border-[3px] border-indigo-400 bg-white transition-colors hover:bg-neutral-100 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      orientation: {
        vertical: "aspect-square w-[180%]",
        horizontal: "aspect-square h-[180%]",
      },
    },
    defaultVariants: {
      orientation: defaultOrientation,
    },
  }
);

const Slider = forwardRef<
  React.ElementRef<typeof SliderPrimitives.Root> &
    VariantProps<typeof sliderTrackStyle>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitives.Root> &
    VariantProps<typeof sliderTrackStyle>
>(({ className, size, orientation = defaultOrientation, ...props }, ref) => (
  <SliderPrimitives.Root
    ref={ref}
    orientation={orientation}
    defaultValue={[50]}
    className={`${orientation === "horizontal" ? "w-full" : "h-full"}`}
    {...props}
  >
    <SliderPrimitives.Control
      className={`flex items-center ${orientation === "horizontal" ? "w-full h-max" : "w-max h-full flex-col"}`}
    >
      <SliderPrimitives.Track
        className={sliderTrackStyle({ size, orientation })}
      >
        <SliderPrimitives.Range className={sliderRangeStyle({ orientation })} />
      </SliderPrimitives.Track>
      <SliderPrimitives.Thumb
        index={0}
        className={sliderThumbStyle({ orientation, className })}
      >
        <SliderPrimitives.HiddenInput />
      </SliderPrimitives.Thumb>
    </SliderPrimitives.Control>
  </SliderPrimitives.Root>
));

Slider.displayName = "Slider";

export { Slider };
