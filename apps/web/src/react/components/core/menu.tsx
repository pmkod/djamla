"use client";
import { forwardRef } from "react";
import { Menu as MenuPrimitives, MenuRootProps, Portal } from "@ark-ui/react";
import { IconChevronRight } from "@tabler/icons-react";

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
      className="flex h-8 cursor-pointer items-center gap-x-2.5 rounded-sm px-2 text-sm font-medium transition-colors hover:bg-neutral-100"
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
      className="flex h-8 cursor-pointer items-center gap-x-2.5 rounded-sm px-2 text-sm font-medium transition-colors hover:bg-neutral-100"
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
    <Portal>
      <MenuPrimitives.Positioner>
        <MenuPrimitives.Content
          ref={ref}
          className="w-max min-w-36 overflow-hidden rounded border border-neutral-200 bg-white p-1 text-neutral-500 shadow-md outline-none data-[placement]:right-0"
          {...props}
        >
          {children}
        </MenuPrimitives.Content>
      </MenuPrimitives.Positioner>
    </Portal>
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
      className="mb-1 mt-2 px-2 text-xs font-medium text-neutral-500"
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
      className="my-1 h-px scale-x-125 bg-neutral-400"
      {...props}
    />
  );
});

MenuSeparator.displayName = "MenuSeparator";

export {
  Menu,
  SubMenu,
  MenuItem,
  MenuTrigger,
  MenuTriggerItem,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuSeparator,
};
