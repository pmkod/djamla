"use client";

import { forwardRef } from "react";
import {
  Popover as PopoverPrimitives,
  PopoverRootProps,
  Portal,
} from "@ark-ui/react";
import { IconX } from "@tabler/icons-react";

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
          "z-50 block w-72 rounded border border-gray-300 bg-white px-4 py-3 shadow-sm outline-none transition-all duration-200 data-[state=open]:visible data-[state=closed]:invisible data-[state=closed]:scale-95 data-[state=open]:scale-100 data-[state=closed]:opacity-0 data-[state=open]:opacity-100 " +
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
  <PopoverPrimitives.Title ref={ref} className="font-semibold" {...props} />
));

PopoverTitle.displayName = "PopoverTitle";

const PopoverDescription = forwardRef<
  React.ElementRef<typeof PopoverPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitives.Description>
>((props, ref) => (
  <PopoverPrimitives.Description
    ref={ref}
    className="text-sm font-normal text-gray-700"
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
  )
);

PopoverHeader.displayName = "PopoverHeader";

const PopoverCloseButton = forwardRef<
  React.ElementRef<typeof PopoverPrimitives.CloseTrigger>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitives.CloseTrigger>
>(({ children, ...props }, ref) => (
  <PopoverPrimitives.CloseTrigger
    ref={ref}
    className="flex h-6 w-6 items-center justify-center hover:bg-gray-100"
    {...props}
  >
    <IconX className="h-4 w-4" />
  </PopoverPrimitives.CloseTrigger>
));

PopoverCloseButton.displayName = "PopoverCloseButton";

export {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverHeader,
  PopoverCloseButton,
  PopoverTrigger,
};
