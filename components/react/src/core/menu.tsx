"use client";
import { Menu as MenuPrimitives, MenuRootProps } from "@ark-ui/react";
import { IconChevronRight } from "@tabler/icons-react";
import { forwardRef } from "react";

const Menu = (props: MenuRootProps) => {
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

Menu.displayName = "Menu";

const SubMenu = (props: MenuRootProps) => {
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

SubMenu.displayName = "SubMenu";

const MenuTrigger = MenuPrimitives.Trigger;

const MenuItem = forwardRef<
  React.ElementRef<typeof MenuPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitives.Item>
>(({ children, ...props }, ref) => {
  return (
    <MenuPrimitives.Item
      ref={ref}
      className="hover:bg-base-200 flex h-8 cursor-pointer items-center gap-x-2.5 rounded-sm px-2 text-sm font-medium transition-colors"
      {...props}
    >
      {children}
    </MenuPrimitives.Item>
  );
});

MenuItem.displayName = "MenuItem";

const MenuTriggerItem = forwardRef<
  React.ElementRef<typeof MenuPrimitives.TriggerItem>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitives.TriggerItem>
>(({ children, ...props }, ref) => {
  return (
    <MenuPrimitives.TriggerItem
      ref={ref}
      className="hover:bg-base-100 flex h-8 cursor-pointer items-center gap-x-2.5 rounded-sm px-2 text-sm font-medium transition-colors"
      {...props}
    >
      {children}
      <IconChevronRight className="ml-2 h-4 w-4" />
    </MenuPrimitives.TriggerItem>
  );
});

MenuTriggerItem.displayName = "MenuTriggerItem";

const MenuContent = forwardRef<
  React.ElementRef<typeof MenuPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitives.Content>
>(({ children, ...props }, ref) => {
  return (
    <MenuPrimitives.Positioner className="pointer-events-none">
      <MenuPrimitives.Content
        ref={ref}
        className="border-base-200 text-base-500 bg-base-0 block w-max min-w-36 overflow-hidden rounded border p-1 shadow-md outline-none transition-all data-[state=closed]:pointer-events-none data-[state=open]:visible data-[state=closed]:invisible data-[state=closed]:scale-95 data-[state=open]:scale-100 data-[state=closed]:opacity-0 data-[state=open]:opacity-100"
        {...props}
      >
        {children}
      </MenuPrimitives.Content>
    </MenuPrimitives.Positioner>
  );
});

MenuContent.displayName = "MenuContent";

const MenuGroup = forwardRef<
  React.ElementRef<typeof MenuPrimitives.ItemGroup>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitives.ItemGroup>
>((props, ref) => {
  return <MenuPrimitives.ItemGroup ref={ref} {...props} />;
});

MenuGroup.displayName = "MenuGroup";

const MenuGroupLabel = forwardRef<
  React.ElementRef<typeof MenuPrimitives.ItemGroupLabel>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitives.ItemGroupLabel>
>((props, ref) => {
  return (
    <MenuPrimitives.ItemGroupLabel
      ref={ref}
      className="text-base-500 mb-1 mt-2 px-2 text-xs font-medium"
      {...props}
    />
  );
});

MenuGroupLabel.displayName = "MenuGroupLabel";

const MenuSeparator = forwardRef<
  React.ElementRef<typeof MenuPrimitives.Separator>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitives.Separator>
>(({ children, ...props }, ref) => {
  return (
    <MenuPrimitives.Separator
      ref={ref}
      className="bg-base-400 my-1 h-px scale-x-125"
      {...props}
    />
  );
});

MenuSeparator.displayName = "MenuSeparator";

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
