"use client";

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Switch as SwitchPrimitives } from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";

const switchStyle = cva("w-20 h-10 bg-blue-100", {
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
});

const Switch = forwardRef<
  ElementRef<typeof SwitchPrimitives.Root> & VariantProps<typeof switchStyle>,
  ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> &
    VariantProps<typeof switchStyle>
>(({ className, size, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={switchStyle({ size, className })}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Control className="rounded-full w-1/2 h-8 border bg-rose-200">
      <SwitchPrimitives.Thumb className="w-8 h-8 bg-blue-500" />
    </SwitchPrimitives.Control>
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
