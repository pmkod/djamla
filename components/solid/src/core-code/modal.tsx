export const modalCode = `"use client";
import { Dialog as DialogPrimitives } from "@ark-ui/solid";
import { IconX } from "@tabler/icons-solidjs";
import {JSX, splitProps} from "solid-js"
import { cva, VariantProps } from "class-variance-authority";
import { ButtonProps } from "./button";
import { IconButton } from "./icon-button";

const Modal = DialogPrimitives.Root;

const ModalTrigger = DialogPrimitives.Trigger;

const ModalHeader = (props: JSX.HTMLAttributes<HTMLDivElement>) => (
  <div
    class="text-base-900 flex h-12 min-h-12 items-center gap-x-3 px-2 text-center"
    {...props}
  />
);


const ModalTitle = (props: DialogPrimitives.TitleProps) => (
  <DialogPrimitives.Title
    class="flex-1 text-start text-lg font-semibold"
    {...props}
  />
);


const ModalBody = (props: JSX.HTMLAttributes<HTMLDivElement>) => (
  <div
    class="text-base-600 w-full flex-1 overflow-auto px-2"
    {...props}
  />
);

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

interface ModalContentProps extends DialogPrimitives.ContentProps, VariantProps<typeof modalContentStyle> {}

const ModalContent = (props: ModalContentProps) =>{
    const [local, rest] = splitProps(props, ['size'])


    return (
        <>
    <DialogPrimitives.Backdrop class="duration-400 pointer-events-none fixed inset-0 z-50 block bg-neutral-800 bg-opacity-0 backdrop-blur-sm backdrop-brightness-50 transition-all data-[state=open]:visible data-[state=closed]:invisible data-[state=open]:bg-opacity-50" />
    <DialogPrimitives.Positioner class="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center">
      <DialogPrimitives.Content
        
        class={modalContentStyle({ size: local.size, class: rest.class })}
        {...props}
        />
    </DialogPrimitives.Positioner>
  </>)
    } 


const ModalFooter = (props: JSX.HTMLAttributes<HTMLDivElement>) => (
  <div class="text-base-600 px-4 py-2.5" {...props} />
);


const ModalCloseButton = (props: DialogPrimitives.CloseTriggerProps) => {
    const [local, rest] = splitProps(props, ['children'])
    return (
        <DialogPrimitives.CloseTrigger>
          <IconButton variant="plain" colorScheme="black" size="sm" {...rest}>
            {local.children ?? <IconX class="h-5 w-5" />}
          </IconButton>
        </DialogPrimitives.CloseTrigger>
      )
}
;

ModalCloseButton.displayName = "ModalCloseButton";

export {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
};
`