export const solidButtonCode = `// Button.tsx
import { IconLoader2 } from "@tabler/icons-solidjs";
import { cva, type VariantProps } from "class-variance-authority";
import { JSX, Show, splitProps } from "solid-js";

const buttonStyle = cva(
  "ring-offset-background focus-visible:ring-ring relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
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
      colorScheme: "primary"
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonStyle>, JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  disabled?: boolean;
};

export const Button = (props: ButtonProps) => {
  const [local, rest] = splitProps(props, [
    "variant",
    "size",
    "colorScheme",
    "isLoading",
    "fullWidth",
    "disabled",
  ]);

  const disabled = () => local.isLoading || local.disabled;

  return (
    <button
      class={buttonStyle({
        variant: local.variant,
        size: local.size,
        colorScheme: local.colorScheme,
        fullWidth: local.fullWidth,
        disabled: disabled(),
      })}
      disabled={disabled()}
      {...rest}
    >
      <Show when={local.isLoading} fallback={
        rest.children
      } >
        <div>
          <div class="absolute inset-0 z-0 flex items-center justify-center bg-inherit">
            <IconLoader2 class="aspect-square h-1/2 animate-spin" />
          </div>
          <div class="opacity-0">{rest.children}</div>
        </div>
      </Show>
    </button>
  );
};

export { buttonStyle };
export type { ButtonProps };`