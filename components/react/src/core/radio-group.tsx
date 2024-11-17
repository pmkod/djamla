"use client";
import React, { forwardRef } from "react";
import {
  RadioGroup as RadioGroupPrimitives,
  useRadioGroupContext,
} from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";

interface RadioGroupProps {
  orientation?: "vertical" | "horizontal";
}

const RadioGroup = forwardRef<
  React.ElementRef<typeof RadioGroupPrimitives.Root> & RadioGroupProps,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Root> &
    RadioGroupProps
>(({ children, orientation = "vertical", ...props }, ref) => {
  return (
    <RadioGroupPrimitives.Root
      ref={ref}
      className={`flex ${
        orientation === "vertical" ? "flex-col gap-y-1.5" : "gap-x-4"
      }`}
      {...props}
    >
      {children}
    </RadioGroupPrimitives.Root>
  );
});

RadioGroup.displayName = "RadioGroup";

const radioGroupItemStyle = cva(
  "border-base-400 hover:bg-base-100 aspect-square rounded-full border p-0.5 transition-colors",
  {
    variants: {
      size: {
        sm: "w-3",
        md: "w-4",
        lg: "w-5",
        xl: "w-6",
      },
      checked: {
        true: "border-primary-400",
      },
    },
  },
);

const radioGroupItemTextStyle = cva("text-base-900", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
      xl: "text-balance",
    },
  },
});

const RadioGroupItem = forwardRef<
  React.ElementRef<typeof RadioGroupPrimitives.Item> &
    VariantProps<typeof radioGroupItemStyle> &
    VariantProps<typeof radioGroupItemTextStyle>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Item> &
    VariantProps<typeof radioGroupItemStyle> &
    VariantProps<typeof radioGroupItemTextStyle>
>(({ children, size = "md", ...props }, ref) => {
  const { value: selectedValue } = useRadioGroupContext();
  const checked = selectedValue === props.value;

  return (
    <RadioGroupPrimitives.Item
      ref={ref}
      className="flex cursor-pointer items-center gap-x-2"
      {...props}
    >
      <div
        className={radioGroupItemStyle({
          size,
          checked,
        })}
      >
        {checked && (
          <RadioGroupPrimitives.ItemControl className="h-full w-full rounded-full bg-blue-500" />
        )}
      </div>
      <RadioGroupPrimitives.ItemText
        className={radioGroupItemTextStyle({
          size,
        })}
      >
        {children}
      </RadioGroupPrimitives.ItemText>
      <RadioGroupPrimitives.ItemHiddenInput />
    </RadioGroupPrimitives.Item>
  );
});

RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };
