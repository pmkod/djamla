export const switchCode = `"use client";
import React, { forwardRef } from "react";
import { Switch as SwitchPrimitives } from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";

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

const Switch = forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root> &
    VariantProps<typeof switchControlStyle>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> &
    VariantProps<typeof switchControlStyle>
>(({ size, colorScheme, ...props }, ref) => {
  return (
    <SwitchPrimitives.Root ref={ref} {...props}>
      <SwitchPrimitives.Control
        className={switchControlStyle({
          size,
          colorScheme,
        })}
      >
        <SwitchPrimitives.Thumb className="aspect-square h-full rounded-full bg-white transition-all data-[state=checked]:ml-[100%] data-[state=checked]:-translate-x-full" />
      </SwitchPrimitives.Control>
      <SwitchPrimitives.HiddenInput />
    </SwitchPrimitives.Root>
  );
});

Switch.displayName = "Switch";

export { Switch };
`;
