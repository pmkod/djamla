import {
  ToggleGroup as ToggleGroupPrimitives,
  useToggle,
  useToggleContext,
  useToggleGroup,
} from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const toggleGroupStyle = cva(
  "flex self-start bg-transparent rounded overflow-hidden",
  {
    variants: {
      variant: {
        plain: "[&>*]:rounded gap-1",
        outline: "border border-base-300 divide-base-300",
      },
      orientation: {
        vertical: "flex-col",
        horizontal: "",
      },
      size: {
        xs: "data-[orientation=vertical]:w-7",
        sm: "data-[orientation=vertical]:w-8",
        md: "data-[orientation=vertical]:w-9",
        lg: "data-[orientation=vertical]:w-10",
        xl: "data-[orientation=vertical]:w-11",
      },
    },
    compoundVariants: [
      {
        orientation: "horizontal",
        variant: "outline",
        className: "divide-x",
      },
      {
        orientation: "vertical",
        variant: "outline",
        className: "divide-y",
      },

      {
        orientation: "horizontal",
        size: "xs",
        className: "h-7",
      },
      {
        orientation: "horizontal",
        size: "sm",
        className: "h-8",
      },
      {
        orientation: "horizontal",
        size: "md",
        className: "h-9",
      },
      {
        orientation: "horizontal",
        size: "lg",
        className: "h-10",
      },
      {
        orientation: "horizontal",
        size: "xl",
        className: "h-11",
      },

      {
        orientation: "vertical",
        size: "xs",
        className: "w-7",
      },
      {
        orientation: "vertical",
        size: "sm",
        className: "w-8",
      },
      {
        orientation: "vertical",
        size: "md",
        className: "w-9",
      },
      {
        orientation: "vertical",
        size: "lg",
        className: "w-10",
      },
      {
        orientation: "vertical",
        size: "xl",
        className: "w-11",
      },
    ],
    defaultVariants: {
      orientation: "horizontal",
      size: "md",
    },
  }
);
const ToggleGroup = forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitives.Root> &
    VariantProps<typeof toggleGroupStyle>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitives.Root> &
    VariantProps<typeof toggleGroupStyle>
>(
  (
    { className, children, variant, orientation = "horizontal", ...props },
    ref
  ) => (
    <ToggleGroupPrimitives.Root
      ref={ref}
      className={toggleGroupStyle({ variant, orientation, className })}
      {...props}
    >
      {children}
    </ToggleGroupPrimitives.Root>
  )
);

const ToggleItem = forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitives.Item>
>(({ className, children, ...props }, ref) => (
  <ToggleGroupPrimitives.Item
    ref={ref}
    className="data-[orientation=vertical]:w-full data-[orientation=horizontal]:h-full aspect-square focus-visible:ring-ring inline-flex items-center text-base-500 overflow-hidden justify-center text-sm font-medium transition-colors  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-base-200 data-[state=off]:hover:bg-base-100"
    {...props}
  >
    {children}
  </ToggleGroupPrimitives.Item>
));

ToggleItem.displayName = "ToggleItem";

export { ToggleGroup, ToggleItem };
