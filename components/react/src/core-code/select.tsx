export const selectCode = `"use client";
import React, { forwardRef } from "react";
import {
  Select as SelectPrimitives,
  createListCollection,
} from "@ark-ui/react";

import { cva, VariantProps } from "class-variance-authority";
import { IconCheck, IconChevronDown } from "@tabler/icons-react";

const selectStyle = cva(
  "border-base-400 relative flex w-full items-center justify-between rounded-sm border px-2.5 disabled:cursor-not-allowed disabled:opacity-50",
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
  },
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
      className="relative flex w-full flex-col"
      positioning={{ sameWidth: true }}
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

      <SelectPrimitives.Positioner className="pointer-events-none">
        <SelectPrimitives.Content className="border-base-300 bg-base-0 z-40 flex h-max origin-top flex-col rounded-sm border transition-all duration-300 data-[state=open]:visible data-[state=closed]:invisible data-[state=closed]:scale-95 data-[state=open]:scale-100 data-[state=closed]:opacity-0 data-[state=open]:opacity-100">
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
  <SelectPrimitives.ItemGroup className="w-full" ref={ref} {...props} />
));

SelectItemGroup.displayName = "SelectItemGroup";

const SelectItemGroupLabel = forwardRef<
  React.ElementRef<typeof SelectPrimitives.ItemGroupLabel>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.ItemGroupLabel>
>((props, ref) => (
  <SelectPrimitives.ItemGroupLabel
    className="text-base-500 text-sm"
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
    className="hover:bg-base-200 text-base-700 flex w-full cursor-pointer items-center justify-between px-2.5 py-2 text-sm transition-colors"
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