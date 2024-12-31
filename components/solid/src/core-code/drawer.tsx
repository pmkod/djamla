export const solidDrawerCode = `"use client";
import { Dialog as DialogPrimitives } from "@ark-ui/solid";
import { IconX } from "@tabler/icons-solidjs";
import {JSX, splitProps} from "solid-js"
import { cva, VariantProps } from "class-variance-authority";
import { IconButton } from "./icon-button";

export const Drawer = DialogPrimitives.Root;

export const DrawerTrigger = DialogPrimitives.Trigger;

export const DrawerCloseTrigger = DialogPrimitives.CloseTrigger;

export const DrawerHeader = (props: JSX.HTMLAttributes<HTMLDivElement>) => (
  <div class="text-base-900 flex min-h-8 items-center" {...props} />
);


export const DrawerBody = (props: JSX.HTMLAttributes<HTMLDivElement>) => (
  <div class="text-base-600 mt-6 flex-1 overflow-y-auto" {...props} />
);


export const DrawerFooter = (props: JSX.HTMLAttributes<HTMLDivElement>) => (
  <div
    class="text-base-900 flex min-h-8 items-center justify-between"
    {...props}
  />
);


export const DrawerTitle = (props: DialogPrimitives.TitleProps) => (
  <DialogPrimitives.Title
    class="flex-1 text-xl font-semibold"
    {...props}
  />
);


export const DrawerClose = DialogPrimitives.CloseTrigger;

const drawerContentStyle = cva(
  "bg-base-0 fixed z-[60] flex flex-col p-4 transition-all duration-500 data-[state=open]:visible data-[state=closed]:invisible",
  {
    variants: {
      side: {
        top: "left-0 right-0 top-0 max-h-[90%] min-h-96 data-[state=closed]:-translate-y-full data-[state=open]:translate-y-0",
        left: "max-w-screen bottom-0 left-0 top-0 min-w-96 data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0",
        right:
          "max-w-screen bottom-0 right-0 top-0 min-w-96 data-[state=closed]:translate-x-full data-[state=open]:translate-x-0",
        bottom:
          "bottom-0 left-0 right-0 max-h-[90%] min-h-96 data-[state=closed]:translate-y-full data-[state=open]:translate-y-0",
      },
    },
    defaultVariants: {
      side: "left",
    },
  },
);

interface DrawerContentProps extends DialogPrimitives.ContentProps, VariantProps<typeof drawerContentStyle> {

}

export const DrawerContent = (props: DrawerContentProps) =>
    
    {
        const [local, restProps] = splitProps(props, ['side'])
        return(
  <>
    <DialogPrimitives.Backdrop class="duration-4000 pointer-events-none fixed inset-0 z-50 block bg-neutral-800 bg-opacity-0 backdrop-blur-sm backdrop-brightness-50 transition-all data-[state=open]:visible data-[state=closed]:invisible data-[state=open]:bg-opacity-50" />

    <DialogPrimitives.Positioner class="fixed left-0 top-0 z-50 h-screen w-screen">
      <DialogPrimitives.Content
        class={drawerContentStyle({ side: local.side })}
        {...restProps}
      />
    </DialogPrimitives.Positioner>
  </>
)};

DrawerContent.displayName = "DrawerContent";

export const DrawerCloseButton = (props: DialogPrimitives.CloseTriggerProps) => (
  <DialogPrimitives.CloseTrigger {...props}>
    <IconButton size="sm" variant="outline" colorScheme="black">
      <IconX class="h-4 w-4" />
    </IconButton>
  </DialogPrimitives.CloseTrigger>
);

`