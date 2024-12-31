export const reactPopoverCode = `"use client";

import {
  Popover as PopoverPrimitives,
  PopoverRootProps,
  Portal,
} from "@ark-ui/react";
import { IconX } from "@tabler/icons-react";
import { forwardRef } from "react";

const Popover = (props: PopoverRootProps) => (
  <PopoverPrimitives.Root portalled {...props} />
);

Popover.displayName = "Popover";

const PopoverTrigger = PopoverPrimitives.Trigger;

const PopoverContent = forwardRef<
  React.ElementRef<typeof PopoverPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitives.Content>
>(({ className, children, ...props }, ref) => (
  <Portal>
    <PopoverPrimitives.Positioner>
      <PopoverPrimitives.Content
        ref={ref}
        className={
          "border-base-300 bg-base-0 z-50 block w-72 rounded border px-4 py-3 shadow-sm outline-none transition-all duration-200 data-[state=open]:visible data-[state=closed]:invisible data-[state=closed]:scale-95 data-[state=open]:scale-100 data-[state=closed]:opacity-0 data-[state=open]:opacity-100 " +
          className
        }
        {...props}
      >
        {children}
      </PopoverPrimitives.Content>
    </PopoverPrimitives.Positioner>
  </Portal>
));

PopoverContent.displayName = "PopoverContent";

const PopoverTitle = forwardRef<
  React.ElementRef<typeof PopoverPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitives.Title>
>((props, ref) => (
  <PopoverPrimitives.Title
    ref={ref}
    className="text-base-900 font-semibold"
    {...props}
  />
));

PopoverTitle.displayName = "PopoverTitle";

const PopoverDescription = forwardRef<
  React.ElementRef<typeof PopoverPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitives.Description>
>((props, ref) => (
  <PopoverPrimitives.Description
    ref={ref}
    className="text-base-600 text-sm font-normal"
    {...props}
  />
));

PopoverDescription.displayName = "PopoverDescription";

interface PopoverHeaderProps {
  children: React.ReactNode;
}

const PopoverHeader = forwardRef<HTMLDivElement, PopoverHeaderProps>(
  ({ children }, ref) => (
    <div ref={ref} className="mb-0.5 flex items-center justify-between">
      {children}
    </div>
  ),
);

PopoverHeader.displayName = "PopoverHeader";

const PopoverCloseButton = forwardRef<
  React.ElementRef<typeof PopoverPrimitives.CloseTrigger>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitives.CloseTrigger>
>(({ children, ...props }, ref) => (
  <PopoverPrimitives.CloseTrigger
    ref={ref}
    className="hover:bg-base-100 flex h-6 w-6 items-center justify-center"
    {...props}
  >
    <IconX className="h-4 w-4" />
  </PopoverPrimitives.CloseTrigger>
));

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
`