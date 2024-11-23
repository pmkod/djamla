export const modalCode = `"use client";
import React, { InputHTMLAttributes } from "react";
import { Dialog as DialogPrimitives, Portal } from "@ark-ui/react";
import { ButtonProps } from "./button";
import { cva, VariantProps } from "class-variance-authority";
import { IconButton } from "./icon-button";
import { IconX } from "@tabler/icons-react";

const Modal = DialogPrimitives.Root;

const ModalTrigger = DialogPrimitives.Trigger;

const ModalHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className="text-base-900 flex h-12 min-h-12 items-center gap-x-3 px-2 text-center"
    {...props}
  />
);

ModalHeader.displayName = "ModalHeader";

const ModalTitle = React.forwardRef<
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

const ModalBody = React.forwardRef<
  HTMLDivElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className="text-base-600 w-full flex-1 overflow-auto px-2"
    {...props}
  >
    {children}
  </div>
));

ModalBody.displayName = "ModalBody";

const modalContentStyle = cva(
  "duration-400 bg-base-0 flex w-full flex-col shadow-md transition-all data-[state=open]:visible data-[state=closed]:invisible data-[state=closed]:translate-y-4 data-[state=open]:translate-y-0 data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
  {
    variants: {
      size: {
        xs: "max-h-[70vh] max-w-xs sm:rounded",
        sm: "max-h-[70vh] max-w-sm sm:rounded",
        md: "max-h-[70vh] max-w-md sm:rounded",
        lg: "max-h-[70vh] max-w-lg sm:rounded",
        xl: "max-h-[70vh] max-w-xl sm:rounded",
        "2xl": "max-h-[70vh] max-w-2xl sm:rounded",
        "3xl": "max-h-[70vh] max-w-3xl sm:rounded",
        fullscreen: "h-screen w-screen rounded-none",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

interface ModalContentProps extends VariantProps<typeof modalContentStyle> {}

const ModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitives.Content> & ModalContentProps,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Content> &
    ModalContentProps
>(({ className, size, ...props }, ref) => (
  <>
    <DialogPrimitives.Backdrop className="duration-400 pointer-events-none fixed inset-0 z-50 block bg-neutral-800 bg-opacity-0 backdrop-blur-sm backdrop-brightness-50 transition-all data-[state=open]:visible data-[state=closed]:invisible data-[state=open]:bg-opacity-50" />
    <DialogPrimitives.Positioner className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center">
      <DialogPrimitives.Content
        ref={ref}
        className={modalContentStyle({ size, className })}
        {...props}
      />
    </DialogPrimitives.Positioner>
  </>
));

ModalContent.displayName = "ModalContent";

const ModalFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="text-base-600 px-4 py-2.5" {...props} />
);

ModalFooter.displayName = "ModalFooter";

const ModalCloseButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => (
    <DialogPrimitives.CloseTrigger ref={ref} asChild>
      <IconButton variant="plain" colorScheme="black" size="sm" {...props}>
        {children || <IconX className="h-5 w-5" />}
      </IconButton>
    </DialogPrimitives.CloseTrigger>
  ),
);

ModalCloseButton.displayName = "ModalCloseButton";

export {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalTitle,
};
`