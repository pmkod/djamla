export const checkboxCode = `import React, { forwardRef } from "react";
import { Checkbox as CheckboxPrimitives } from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";
import { IconCheck } from "@tabler/icons-react";

const checkboxControlStyle = cva(
  "inline-flex cursor-pointer rounded-sm border data-[disabled]:pointer-events-none data-[state=unchecked]:border-base-400 data-[disabled]:opacity-50 data-[state=unchecked]:hover:bg-base-100",
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
          "text-white data-[state=checked]:border-primary-500 data-[state=checked]:bg-primary-500",
        black:
          "text-white data-[state=checked]:border-base-800 data-[state=checked]:bg-base-800",
      },
    },

    defaultVariants: {
      size: "md",
      colorScheme: "primary",
    },
  }
);

const Checkbox = forwardRef<
  React.ElementRef<typeof CheckboxPrimitives.Root> &
    VariantProps<typeof checkboxControlStyle>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitives.Root> &
    VariantProps<typeof checkboxControlStyle>
>(({ size, colorScheme, className, ...props }, ref) => {
  return (
    <CheckboxPrimitives.Root ref={ref} {...props}>
      <CheckboxPrimitives.Control
        className={checkboxControlStyle({
          size,
          colorScheme,
          className,
        })}
      >
        <CheckboxPrimitives.Indicator className="p-0.5">
          <IconCheck className="h-full w-full" />
        </CheckboxPrimitives.Indicator>
      </CheckboxPrimitives.Control>
      <CheckboxPrimitives.HiddenInput />
    </CheckboxPrimitives.Root>
  );
});

Checkbox.displayName = "Checkbox";

export { Checkbox };
`;
