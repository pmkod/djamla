"use client";
import React from "react";
import { Dialog as DialogPrimitives, Portal } from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";
import { IconButton } from "./icon-button";
import { IconX } from "@tabler/icons-react";

export const Drawer = DialogPrimitives.Root;

export const DrawerTrigger = DialogPrimitives.Trigger;

export const DrawerCloseTrigger = DialogPrimitives.CloseTrigger;

export const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="flex items-center" {...props} />
);

DrawerHeader.displayName = "DrawerHeader";

export const DrawerBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="mt-6 flex-1 overflow-y-auto" {...props} />
);

DrawerBody.displayName = "DrawerBody";

export const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitives.Title
    ref={ref}
    className="flex-1 text-xl font-semibold"
    {...props}
  />
));

DrawerTitle.displayName = "DrawerTitle";

export const DrawerClose = DialogPrimitives.CloseTrigger;

const drawerContentStyle = cva(
  "fixed z-50 flex flex-col border bg-white p-4 transition-all duration-300 data-[state=open]:visible data-[state=closed]:invisible",
  {
    variants: {
      side: {
        top: "left-0 right-0 top-0 max-h-[90%] min-h-96 data-[state=closed]:-translate-y-full data-[state=open]:translate-y-0",
        left: "bottom-0 left-0 top-0 min-w-96 max-w-[90%] data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0",
        right:
          "bottom-0 right-0 top-0 min-w-96 max-w-[90%] data-[state=closed]:translate-x-full data-[state=open]:translate-x-0",
        bottom:
          "bottom-0 left-0 right-0 max-h-[90%] min-h-96 data-[state=closed]:translate-y-full data-[state=open]:translate-y-0",
      },
    },
    defaultVariants: {
      side: "left",
    },
  }
);

export const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitives.Content> &
    VariantProps<typeof drawerContentStyle>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Content> &
    VariantProps<typeof drawerContentStyle>
>(({ className, side, ...props }, ref) => (
  <>
    <Portal>
      <DialogPrimitives.Backdrop className="pointer-events-none fixed inset-0 z-50 block bg-base-900 transition-all duration-500 data-[state=open]:visible data-[state=closed]:invisible data-[state=closed]:bg-opacity-0 data-[state=open]:bg-opacity-50" />
      <DialogPrimitives.Positioner>
        <DialogPrimitives.Content
          ref={ref}
          className={drawerContentStyle({ side })}
          {...props}
        />
      </DialogPrimitives.Positioner>
    </Portal>
  </>
));

DrawerContent.displayName = "DrawerContent";

export const DrawerCloseButton = React.forwardRef<
  React.ElementRef<typeof DialogPrimitives.CloseTrigger>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.CloseTrigger>
>(({ className, ...props }, ref) => (
  <DialogPrimitives.CloseTrigger ref={ref} asChild {...props}>
    <IconButton size="sm" variant="outline" colorScheme="black">
      <IconX className="h-4 w-4" />
    </IconButton>
  </DialogPrimitives.CloseTrigger>
));

DrawerCloseButton.displayName = "DrawerCloseButton";
