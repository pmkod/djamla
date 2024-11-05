"use client";
import React, { InputHTMLAttributes } from "react";
import { Dialog as DialogPrimitives, Portal } from "@ark-ui/react";
import { ButtonProps } from "./button";
import { cva, VariantProps } from "class-variance-authority";
import { IconButton } from "./icon-button";
import { IconX } from "@tabler/icons-react";

export const Modal = DialogPrimitives.Root;

export const ModalTrigger = DialogPrimitives.Trigger;

export const ModalHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className="flex h-12 min-h-12 items-center gap-x-3 px-2 text-center"
    {...props}
  />
);

ModalHeader.displayName = "ModalHeader";

export const ModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitives.Title
    ref={ref}
    className="flex-1 text-start text-lg font-semibold"
    {...props}
  />
));

ModalTitle.displayName = "ModalTitle";

export const ModalBody = React.forwardRef<
  HTMLDivElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className="flex-1 overflow-auto px-4" {...props}>
    {children}
  </div>
));

ModalBody.displayName = "ModalBody";

const modalContentStyle = cva(
  "duration-400 fixed z-50 flex max-h-screen w-full flex-col border bg-white shadow-md transition-all data-[state=closed]:invisible data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
  {
    variants: {
      size: {
        xs: "left-1/2 top-[50%] max-h-[70vh] max-w-xs -translate-x-1/2 -translate-y-[60%] sm:rounded-md",
        sm: "left-1/2 top-[50%] max-h-[70vh] max-w-sm -translate-x-1/2 -translate-y-[60%] sm:rounded-md",
        md: "left-1/2 top-[50%] max-h-[70vh] max-w-md -translate-x-1/2 -translate-y-[60%] sm:rounded-md",
        lg: "left-1/2 top-[50%] max-h-[70vh] max-w-lg -translate-x-1/2 -translate-y-[60%] sm:rounded-md",
        xl: "left-1/2 top-[50%] max-h-[70vh] max-w-xl -translate-x-1/2 -translate-y-[60%] sm:rounded-md",
        fullscreen: "inset-0 h-screen w-screen rounded-none",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface ModalContentProps extends VariantProps<typeof modalContentStyle> {}

export const ModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitives.Content> & ModalContentProps,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Content> &
    ModalContentProps
>(({ className, size, ...props }, ref) => (
  <Portal>
    <DialogPrimitives.Backdrop className="pointer-events-none fixed inset-0 z-50 block bg-neutral-900 bg-opacity-0 transition-all duration-500 data-[state=open]:visible data-[state=closed]:invisible data-[state=open]:bg-opacity-50" />
    <DialogPrimitives.Positioner>
      <DialogPrimitives.Content
        ref={ref}
        className={modalContentStyle({ size })}
        {...props}
      />
    </DialogPrimitives.Positioner>
  </Portal>
));

ModalContent.displayName = "ModalContent";

export const ModalFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="px-4 py-2.5" {...props} />
);

ModalFooter.displayName = "ModalFooter";

export const ModalCloseButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ children, ...props }, ref) => (
  <DialogPrimitives.CloseTrigger ref={ref} asChild>
    <IconButton variant="plain" colorScheme="black" size="sm" {...props}>
      {children || <IconX className="h-5 w-5" />}
    </IconButton>
  </DialogPrimitives.CloseTrigger>
));

ModalCloseButton.displayName = "ModalCloseButton";
