"use client";

import { Dialog as DialogPrimitives } from "@ark-ui/solid";
import { Button } from "./button";
import { splitProps, JSX } from "solid-js";

const AlertDialog = DialogPrimitives.Root;

const AlertDialogTrigger = DialogPrimitives.Trigger;

interface AlertDialogContentProps extends DialogPrimitives.ContentProps {

}

const AlertDialogContent = (props: AlertDialogContentProps) =>
    
    
    {
        const [local, rest] = splitProps(props, ['class'])
        return(
  <>
    <DialogPrimitives.Backdrop class="duration-400 pointer-events-none fixed inset-0 z-50 block bg-neutral-800 bg-opacity-0 backdrop-blur-sm backdrop-brightness-50 transition-all data-[state=open]:visible data-[state=closed]:invisible data-[state=open]:bg-opacity-50" />

    <DialogPrimitives.Positioner class="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center">
      <DialogPrimitives.Content
        class={
          "bg-base-0 data-[state=closed]:translate-0 grid w-96 max-w-lg gap-4 rounded p-6 shadow-lg transition-all duration-200 data-[state=open]:visible data-[state=closed]:invisible data-[state=open]:-translate-y-14 data-[state=closed]:opacity-0 data-[state=open]:opacity-100 " +
          local.class
        }
        {...rest}
      />
    </DialogPrimitives.Positioner>
  </>
)};

const AlertDialogHeader = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
    const [local, rest] = splitProps(props, ['class'])
    return  (
        <div
          class={"flex flex-col space-y-2 text-center sm:text-left " + local.class}
          {...rest}
        />
      )
}

interface AlertDialogFooterProps extends JSX.HTMLAttributes<HTMLDivElement> {

}

const AlertDialogFooter = (props: AlertDialogFooterProps) => {
    const [local, rest] = splitProps(props, ['class'])
    return (
        <div
          class={"flex flex-col items-stretch gap-y-2 " + local.class}
          {...rest}
        />
      )
};

const AlertDialogTitle = (props: DialogPrimitives.TitleProps) => 
    
    {
        const [local, rest] = splitProps(props, ['class'])

         return(
  <DialogPrimitives.Title
    class={"text-base-800 text-lg font-semibold " + local.class}
    {...rest}
  />
)};



const AlertDialogDescription = (props: DialogPrimitives.DescriptionProps) => {
    const [local, rest] = splitProps(props, ['class'])

    return (
  <DialogPrimitives.Description
    class={"text-base-500 text-sm " + local.class}
    {...rest}
  />
)};



interface AlertDialogCancelProps extends DialogPrimitives.CloseTriggerProps {

}

const AlertDialogCancel = (props: AlertDialogCancelProps) => 

    
    {
        const [local, rest] = splitProps(props, ['children'])
        return(
  <DialogPrimitives.CloseTrigger
    {...rest}
  >
    <Button variant="outline" colorScheme="black">
      {local.children}
    </Button>
  </DialogPrimitives.CloseTrigger>
)};

export {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
};
