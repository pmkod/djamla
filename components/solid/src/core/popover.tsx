"use client";

import { Popover as PopoverPrimitives, PopoverRootProps } from "@ark-ui/solid";
import { IconX } from "@tabler/icons-solidjs";
import { JSX, splitProps } from "solid-js";

const Popover = (props: PopoverRootProps) => (
  <PopoverPrimitives.Root portalled {...props} />
);

const PopoverTrigger = PopoverPrimitives.Trigger;

const PopoverContent = (props: PopoverPrimitives.ContentProps) => {
  const [local, rest] = splitProps(props, ["class"]);
  const { children, ...restProps } = rest;
  return (
    <PopoverPrimitives.Positioner class="pointer-events-none">
      <PopoverPrimitives.Content
        class={
          "border-base-300 bg-base-0 z-50 block w-72 rounded border px-4 py-3 shadow-sm outline-none transition-all duration-200 data-[state=open]:visible data-[state=closed]:invisible data-[state=closed]:scale-95 data-[state=open]:scale-100 data-[state=closed]:opacity-0 data-[state=open]:opacity-100 " +
          local.class
        }
        {...restProps}
      >
        {children}
      </PopoverPrimitives.Content>
    </PopoverPrimitives.Positioner>
  );
};

PopoverContent.displayName = "PopoverContent";

const PopoverTitle = (props: PopoverPrimitives.TitleProps) => {
  return (
    <PopoverPrimitives.Title class="text-base-900 font-semibold" {...props} />
  );
};

PopoverTitle.displayName = "PopoverTitle";

const PopoverDescription = (props: PopoverPrimitives.DescriptionProps) => (
  <PopoverPrimitives.Description
    class="text-base-600 text-sm font-normal"
    {...props}
  />
);

PopoverDescription.displayName = "PopoverDescription";

interface PopoverHeaderProps extends JSX.HTMLAttributes<HTMLDivElement> {}

const PopoverHeader = (props: PopoverHeaderProps) => {
  const { children } = props;
  return (
    <div class="mb-0.5 flex items-center justify-between" {...props}>
      {children}
    </div>
  );
};

PopoverHeader.displayName = "PopoverHeader";

const PopoverCloseButton = (props: PopoverPrimitives.CloseTriggerProps) => (
  <PopoverPrimitives.CloseTrigger
    class="hover:bg-base-100 flex h-6 w-6 items-center justify-center"
    {...props}
  >
    <IconX class="h-4 w-4" />
  </PopoverPrimitives.CloseTrigger>
);

PopoverCloseButton.displayName = "PopoverCloseButton";

export {
  Popover,
  PopoverCloseButton,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
};
