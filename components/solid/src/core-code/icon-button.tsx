export const solidIconButtonCode = `"use client";
import { ark } from "@ark-ui/solid";
import { IconLoader2 } from "@tabler/icons-solidjs";
import { cva, VariantProps } from "class-variance-authority";
import { JSX, Show, splitProps } from "solid-js";

const iconButtonStyle = cva(
  "ring-offset-background focus-visible:ring-ring relative inline-flex aspect-square items-center justify-center overflow-hidden whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-base-300 hover:bg-base-100 border bg-transparent",
        ghost: "hover:bg-base-100 bg-transparent",
        plain: "",
      },
      colorScheme: {
        primary: "",
        red: "",
        black: "",
      },
      size: {
        xs: "h-8 rounded-sm",
        sm: "h-9 rounded-sm",
        md: "h-10 rounded-[3px]",
        lg: "h-11 rounded",
        xl: "h-12 rounded",
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
        className: "bg-primary-500 hover:bg-primary-600 text-white",
      },
      {
        variant: "outline",
        colorScheme: "primary",
        className: "text-primary-500",
      },
      {
        variant: "ghost",
        colorScheme: "primary",
        className: "text-primary-600",
      },
      {
        variant: "plain",
        colorScheme: "primary",
        className: "text-primary-700",
      },
      {
        variant: "solid",
        colorScheme: "red",
        className: "bg-red-500 text-white hover:bg-red-600",
      },
      {
        variant: "outline",
        colorScheme: "red",
        className: "text-red-500",
      },
      {
        variant: "ghost",
        colorScheme: "red",
        className: "text-red-600",
      },
      {
        variant: "plain",
        colorScheme: "red",
        className: "hover:bg-base-100 text-red-500",
      },
      {
        variant: "solid",
        colorScheme: "black",
        className: "bg-base-800 hover:bg-base-900 text-base-0",
      },
      {
        variant: "outline",
        colorScheme: "black",
        className: "text-base-900",
      },
      {
        variant: "ghost",
        colorScheme: "black",
        className: "text-base-900",
      },
      {
        variant: "plain",
        colorScheme: "black",
        className: "text-base-900 hover:bg-base-100",
      },
    ],
    defaultVariants: {
      variant: "solid",
      colorScheme: "primary",
      size: "md",
      fullWidth: false,
    },
  },
);

interface IconButtonProps extends VariantProps<typeof iconButtonStyle>, JSX.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    disabled?: boolean;
  }

export const IconButton = (

props
    : IconButtonProps
  ) => {
    
    const [local, rest] = splitProps(props, [
        "variant",
        "size",
        "colorScheme",
        "isLoading",
        "fullWidth",
        "disabled",
      ]);

      const {children, ...restProps} = rest
    
      const disabled = () => local.isLoading || local.disabled;
    return (
      <ark.button
        class={iconButtonStyle({
          size: local.size,
          variant: local.variant,
          colorScheme: local.colorScheme,
          fullWidth: local.fullWidth,
          disabled: disabled(),
        })}
        disabled={disabled()}
        {...restProps}
      >

        <Show when={local.isLoading} fallback={children}>

        <div>
            <div class="absolute inset-0 flex items-center justify-center bg-inherit">
              <IconLoader2 class="aspect-square h-1/2 animate-spin" />
            </div>
            <div class="opacity-0">{children}</div>
          </div>
        </Show>
      </ark.button>
    );
  }

`