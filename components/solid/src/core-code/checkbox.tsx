export const checkboxCode = `"use client";
import { Checkbox as CheckboxPrimitives } from "@ark-ui/solid";
import { IconCheck } from "@tabler/icons-solidjs";
import { cva, VariantProps } from "class-variance-authority";
import { JSX, splitProps } from "solid-js";

const checkboxControlStyle = cva(
  "data-[state=unchecked]:border-base-400 data-[state=unchecked]:hover:bg-base-100 inline-flex cursor-pointer rounded-sm border data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      size: {
        sm: "size-4",
        md: "size-5",
        lg: "size-6",
        xl: "size-7",
      },
      colorScheme: {
        primary:
          "data-[state=checked]:border-primary-500 data-[state=checked]:bg-primary-500 text-white",
        black:
          "data-[state=checked]:border-base-800 data-[state=checked]:bg-base-800 text-white",
      },
    },

    defaultVariants: {
      size: "md",
      colorScheme: "primary",
    },
  },
);


interface CheckboxProps extends CheckboxPrimitives.RootProps, VariantProps<typeof checkboxControlStyle> {

}



const Checkbox = (props: CheckboxProps) => {
    const [local, rest] = splitProps(props, [
        'size',
        "colorScheme"
    ])
  return (
    <CheckboxPrimitives.Root {...rest}>
      <CheckboxPrimitives.Control
        class={checkboxControlStyle({
          size: local.size,
          colorScheme: local.colorScheme,
          class: rest.class
        })}
      >
        <CheckboxPrimitives.Indicator class="p-0.5">
          <IconCheck class="h-full w-full" />
        </CheckboxPrimitives.Indicator>
      </CheckboxPrimitives.Control>
      <CheckboxPrimitives.HiddenInput />
    </CheckboxPrimitives.Root>
  );
};

Checkbox.displayName = "Checkbox";

export { Checkbox };
`