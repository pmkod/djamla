export const menuCode = `"use client";
import { Menu as MenuPrimitives } from "@ark-ui/solid";
import { IconChevronRight } from "@tabler/icons-solidjs";
import { splitProps } from "solid-js";

const Menu = (props: MenuPrimitives.RootProps) => {
  return (
    <MenuPrimitives.Root
      positioning={{
        placement: "bottom-start",
        gutter: 2,
      }}
      {...props}
    />
  );
};




const SubMenu = (props: MenuPrimitives.RootProps) => {
  return (
    <MenuPrimitives.Root
      positioning={{
        placement: "right-start",
        gutter: 0,
        overlap: true,
        fitViewport: true,
      }}
      {...props}
    />
  );
};



const MenuTrigger = MenuPrimitives.Trigger;

const MenuItem = (props: MenuPrimitives.ItemProps) => {
    const [local, rest] = splitProps(props,  ['children'])
  return (
    <MenuPrimitives.Item
      class="hover:bg-base-200 flex h-8 cursor-pointer items-center gap-x-2.5 rounded-sm px-2 text-sm font-medium transition-colors"
      {...rest}
    >
      {local.children}
    </MenuPrimitives.Item>
  );
};


const MenuTriggerItem = (props: MenuPrimitives.TriggerItemProps) => {
    const [local, restProps] = splitProps(props, ['children'])
  return (
    <MenuPrimitives.TriggerItem
      class="hover:bg-base-100 flex h-8 cursor-pointer items-center gap-x-2.5 rounded-sm px-2 text-sm font-medium transition-colors"
      {...restProps}
    >
      {local.children}
      <IconChevronRight class="ml-2 h-4 w-4" />
    </MenuPrimitives.TriggerItem>
  );
};


const MenuContent = (props: MenuPrimitives.ContentProps) => {
    const [local, restProps] = splitProps(props, ['children'])

  return (
    
      <MenuPrimitives.Positioner>
        <MenuPrimitives.Content
          
          class="border-base-200 text-base-500 bg-base-0 block w-max min-w-36 overflow-hidden rounded border p-1 shadow-md outline-none transition-all data-[state=open]:visible data-[state=closed]:invisible data-[state=closed]:scale-95 data-[state=open]:scale-100 data-[state=closed]:opacity-0 data-[state=open]:opacity-100"
          {...restProps}
        >
          {local.children}
        </MenuPrimitives.Content>
      </MenuPrimitives.Positioner>
    
  );
};


const MenuGroup = (props:MenuPrimitives.ItemGroupProps) => {
  return <MenuPrimitives.ItemGroup {...props} />;
};


const MenuGroupLabel = (props: MenuPrimitives.ItemGroupLabelProps) => {
  return (
    <MenuPrimitives.ItemGroupLabel
      class="text-base-500 mb-1 mt-2 px-2 text-xs font-medium"
      {...props}
    />
  );
};


const MenuSeparator = (props: 
    MenuPrimitives.SeparatorProps
) => {
  return (
    <MenuPrimitives.Separator
      class="bg-base-400 my-1 h-px scale-x-125"
      {...props}
    />
  );
}


export {
  Menu,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
  SubMenu,
};
`