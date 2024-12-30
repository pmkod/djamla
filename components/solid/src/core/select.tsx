import {
    CollectionItem,
  createListCollection,
  Select as SelectPrimitives,
} from "@ark-ui/solid";

import { IconCheck, IconChevronDown } from "@tabler/icons-solidjs";
import { cva, VariantProps } from "class-variance-authority";
import { splitProps } from "solid-js";

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

interface SelectProps extends SelectPrimitives.RootProps<CollectionItem>,  VariantProps<typeof selectStyle> {


}
const Select = (props: SelectProps) => {
    const [local, restProps] = splitProps(props, ['size','children'])

  return (
    <SelectPrimitives.Root
      class="relative flex w-full flex-col"
      positioning={{ sameWidth: true }}
      {...restProps}
    >
      <SelectPrimitives.Control class="text-base-900 hover:bg-base-100 transition-colors">
        <SelectPrimitives.Trigger
          class={selectStyle({
            size: local.size,
          })}
        >
          <SelectPrimitives.ValueText placeholder="Select" />
          <SelectPrimitives.Indicator>
            <IconChevronDown class="h-4 w-4" />
          </SelectPrimitives.Indicator>
        </SelectPrimitives.Trigger>
      </SelectPrimitives.Control>

      <SelectPrimitives.Positioner class="pointer-events-none">
        <SelectPrimitives.Content class="border-base-300 bg-base-0 z-40 flex h-max origin-top flex-col rounded-sm border transition-all duration-300 data-[state=open]:visible data-[state=closed]:invisible data-[state=closed]:scale-95 data-[state=open]:scale-100 data-[state=closed]:opacity-0 data-[state=open]:opacity-100">
          {local.children}
        </SelectPrimitives.Content>
      </SelectPrimitives.Positioner>

      <SelectPrimitives.HiddenSelect />
    </SelectPrimitives.Root>
  );
};


const SelectItemGroup = (props: SelectPrimitives.ItemGroupProps) => (
  <SelectPrimitives.ItemGroup class="w-full" {...props} />
);


const SelectItemGroupLabel = (props:SelectPrimitives.ItemGroupLabelProps) => (
  <SelectPrimitives.ItemGroupLabel
    class="text-base-500 text-sm"
    {...props}
  />
);


const SelectItem = (props: SelectPrimitives.ItemProps) => (
  <SelectPrimitives.Item
    class="hover:bg-base-200 text-base-700 flex w-full cursor-pointer items-center justify-between px-2.5 py-2 text-sm transition-colors"
    {...props}
  >
    <SelectPrimitives.ItemText>{props.item}</SelectPrimitives.ItemText>
    <SelectPrimitives.ItemIndicator>
      <IconCheck class="size-4 text-blue-600" />
    </SelectPrimitives.ItemIndicator>
  </SelectPrimitives.Item>
);


export {
  createListCollection,
  Select,
  SelectItem,
  SelectItemGroup,
  SelectItemGroupLabel,
};
