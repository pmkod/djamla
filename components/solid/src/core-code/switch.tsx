export const solidSwitchCode = `"use client";
import { Switch as SwitchPrimitives } from "@ark-ui/solid";
import { cva, VariantProps } from "class-variance-authority";
import { splitProps } from "solid-js";

const switchControlStyle = cva(
  "bg-base-300 inline-flex aspect-[2/1] cursor-pointer items-center rounded-full p-1 data-[disabled]:cursor-default data-[disabled]:opacity-50",
  {
    variants: {
      size: {
        sm: "h-4",
        md: "h-5",
        lg: "h-6",
        xl: "h-7",
      },

      colorScheme: {
        primary: "data-[state=checked]:bg-primary-500",
        black: "data-[state=checked]:bg-base-800",
      },
    },
    defaultVariants: {
      size: "md",
      colorScheme: "primary",
    },
  },
);

interface SwitchProps extends SwitchPrimitives.RootProps,  VariantProps<typeof switchControlStyle> {

}

const Switch = (props:SwitchProps) => {
    const [local, rest] = splitProps(props, ['size', 'colorScheme'])
  return (
    <SwitchPrimitives.Root {...rest}>
      <SwitchPrimitives.Control
        class={switchControlStyle({
          size: local.size,
          colorScheme: local.colorScheme,
        })}
      >
        <SwitchPrimitives.Thumb class="aspect-square h-full rounded-full bg-white transition-all data-[state=checked]:ml-[100%] data-[state=checked]:-translate-x-full" />
      </SwitchPrimitives.Control>
      <SwitchPrimitives.HiddenInput />
    </SwitchPrimitives.Root>
  );
};


export { Switch };
`