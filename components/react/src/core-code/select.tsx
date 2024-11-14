export const selectCode = `"use client";
import React, { forwardRef } from "react";
import {
  Select as SelectPrimitives,
  createListCollection,
} from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";
import { IconCheck, IconChevronDown } from "@tabler/icons-react";

const selectStyle = cva(
  "flex w-full items-center justify-between rounded-sm border border-base-400 px-2.5 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        xs: "h-8 text-xs",
        sm: "h-9 text-xs",
        md: "h-10 text-sm",
        lg: "h-11",
        xl: "h-12",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const Select = forwardRef<
  React.ElementRef<typeof SelectPrimitives.Root> &
    VariantProps<typeof selectStyle>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Root> &
    VariantProps<typeof selectStyle>
>(({ size, children, ...props }, ref) => {
  return (
    <SelectPrimitives.Root
      ref={ref}
      className="relative z-20 w-full"
      {...props}
    >
      <SelectPrimitives.Control className="text-base-900 hover:bg-base-100 transition-colors">
        <SelectPrimitives.Trigger
          className={selectStyle({
            size,
          })}
        >
          <SelectPrimitives.ValueText placeholder="Select" />
          <SelectPrimitives.Indicator>
            <IconChevronDown className="h-4 w-4" />
          </SelectPrimitives.Indicator>
        </SelectPrimitives.Trigger>
      </SelectPrimitives.Control>
      <SelectPrimitives.Positioner className="absolute left-0 right-0 z-40">
        <SelectPrimitives.Content className="w-full rounded-sm border border-base-300 bg-base-0 data-[state=open]:visible data-[state=closed]:invisible data-[state=open]:scale-100 data-[state=closed]:scale-50 data-[state=open]:opacity-100 data-[state=closed]:opacity-0 transition-all duration-300">
          {children}
        </SelectPrimitives.Content>
      </SelectPrimitives.Positioner>
      <SelectPrimitives.HiddenSelect />
    </SelectPrimitives.Root>
  );
});

Select.displayName = "Select";

const SelectItemGroup = forwardRef<
  React.ElementRef<typeof SelectPrimitives.ItemGroup>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.ItemGroup>
>((props, ref) => (
  <SelectPrimitives.ItemGroup
    ref={ref}
    className="flex w-full flex-col"
    {...props}
  />
));

SelectItemGroup.displayName = "SelectItemGroup";

const SelectItemGroupLabel = forwardRef<
  React.ElementRef<typeof SelectPrimitives.ItemGroupLabel>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.ItemGroupLabel>
>((props, ref) => (
  <SelectPrimitives.ItemGroupLabel
    className="text-sm text-base-500"
    ref={ref}
    {...props}
  />
));

SelectItemGroupLabel.displayName = "SelectItemGroupLabel";

const SelectItem = forwardRef<
  React.ElementRef<typeof SelectPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Item>
>(({ children, ...props }, ref) => (
  <SelectPrimitives.Item
    className="flex justify-between items-center hover:bg-base-200 transition-colors cursor-pointer px-2.5 py-2 text-sm text-base-700"
    ref={ref}
    {...props}
  >
    <SelectPrimitives.ItemText>{props.item}</SelectPrimitives.ItemText>
    <SelectPrimitives.ItemIndicator>
      <IconCheck className="size-4 text-blue-600" />
    </SelectPrimitives.ItemIndicator>
  </SelectPrimitives.Item>
));

SelectItem.displayName = "SelectItem";

export {
  Select,
  SelectItem,
  SelectItemGroup,
  SelectItemGroupLabel,
  createListCollection,
};
`