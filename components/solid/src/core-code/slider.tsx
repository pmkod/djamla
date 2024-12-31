export const solidSliderCode = `"use client";

import { Slider as SliderPrimitives } from "@ark-ui/solid";
import { cva, VariantProps } from "class-variance-authority";
import { splitProps } from "solid-js";

const defaultOrientation = "horizontal";

const sliderTrackStyle = cva("bg-base-200 overflow-hidden rounded-full", {
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

const sliderRangeStyle = cva("bg-primary-500", {
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
  "border-primary-400 hover:bg-base-400 cursor-pointer rounded-full border-[3px] bg-white transition-colors disabled:pointer-events-none disabled:opacity-50",
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
  },
);

interface SliderProps extends SliderPrimitives.RootProps, Omit<VariantProps<typeof sliderTrackStyle>, "orientation"> {

}

const Slider = ( props: SliderProps) => 
    
    {
        const [local, rest] = splitProps(props, ['orientation'])
        const {orientation = defaultOrientation} = local
       return (
  <SliderPrimitives.Root
    orientation={orientation}
    defaultValue={[50]}
    class={\`\${orientation === "horizontal" ? "w-full" : "h-full"}\`}
    {...rest}
  >
    <SliderPrimitives.Control
      class={\`flex items-center \${orientation === "horizontal" ? "h-max w-full" : "h-full w-max flex-col"}\`}
    >
      <SliderPrimitives.Track
        class={sliderTrackStyle({ orientation })}
      >
        <SliderPrimitives.Range class={sliderRangeStyle({ orientation })} />
      </SliderPrimitives.Track>
      <SliderPrimitives.Thumb
        index={0}
        class={sliderThumbStyle({ orientation, class: local })}
      >
        <SliderPrimitives.HiddenInput />
      </SliderPrimitives.Thumb>
    </SliderPrimitives.Control>
  </SliderPrimitives.Root>
)};


export { Slider };
`