<script setup lang="ts">
import { cva, VariantProps } from "class-variance-authority";

const buttonStyle = cva(
  "focus-visible:ring-ring relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        solid: "",
        outline: "hover:bg-base-100 border-base-300 border bg-transparent",
        ghost: "hover:bg-base-100 bg-transparent",
      },
      colorScheme: {
        primary: "",
        black: "",
        red: "",
      },
      size: {
        xs: "h-7 rounded-sm px-2.5 text-xs",
        sm: "h-9 rounded-sm px-3 text-sm",
        md: "h-10 rounded-[3px] px-3.5 text-base",
        lg: "h-11 rounded px-5 text-lg",
        xl: "h-12 rounded px-8 text-lg",
      },
      fullWidth: {
        true: "w-full",
      },
      disabled: {
        true: "pointer-events-none opacity-50",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "primary",
        class: "bg-primary-500 hover:bg-primary-600 text-white",
      },
      {
        variant: "outline",
        colorScheme: "primary",
        class: "text-primary-500",
      },
      {
        variant: "ghost",
        colorScheme: "primary",
        class: "text-primary-500",
      },
      //
      {
        variant: "solid",
        colorScheme: "red",
        class: "bg-red-500 text-white hover:bg-red-600",
      },
      {
        variant: "outline",
        colorScheme: "red",
        class: "text-red-600",
      },
      {
        variant: "ghost",
        colorScheme: "red",
        class: "text-red-600",
      },
      //
      {
        variant: "solid",
        colorScheme: "black",
        class: "bg-base-900 hover:bg-base-950 text-base-0",
      },
      {
        variant: "outline",
        colorScheme: "black",
        class: "text-base-900",
      },
      {
        variant: "ghost",
        colorScheme: "black",
        class: "text-base-900",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorScheme: "primary",
    },
  },
);

interface Props {
  variant?: NonNullable<Parameters<typeof buttonStyle>[0]>["variant"];
  colorScheme?: NonNullable<Parameters<typeof buttonStyle>[0]>["colorScheme"];
  size?: NonNullable<Parameters<typeof buttonStyle>[0]>["size"];
  fullWidth?: NonNullable<Parameters<typeof buttonStyle>[0]>["fullWidth"];
  disabled?: NonNullable<Parameters<typeof buttonStyle>[0]>["disabled"];
  as?: string;
}

withDefaults(defineProps<Props>(), {
  as: "button",
});
</script>

<template>
  <component
    :is="as"
    :class="buttonStyle({ variant, colorScheme, size, fullWidth, disabled })"
  >
    <slot />
  </component>
</template>
