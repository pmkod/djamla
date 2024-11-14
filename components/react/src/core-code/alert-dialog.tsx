export const alertDialogCode = `"use client";

import * as React from "react";
import { Dialog as DialogPrimitives, Portal } from "@ark-ui/react";
import { Button } from "./button";

const AlertDialog = DialogPrimitives.Root;

const AlertDialogTrigger = DialogPrimitives.Trigger;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Content>
>(({ className, ...props }, ref) => (
  <Portal>
    <DialogPrimitives.Backdrop className="pointer-events-none fixed inset-0 z-50 block bg-base-900 bg-opacity-0 transition-all duration-400 data-[state=open]:visible data-[state=closed]:invisible data-[state=open]:bg-opacity-50" />

    <DialogPrimitives.Positioner>
      <DialogPrimitives.Content
        ref={ref}
        className={
          "bg-base-0 w-96 fixed left-[50%] top-[50%] z-50 grid max-w-lg translate-x-[-50%] data-[state=open]:translate-y-[-80%] data-[state=closed]:translate-y-[-70%] gap-4 p-6 shadow-lg transition-all duration-200 data-[state=open]:visible data-[state=closed]:invisible data-[state=open]:opacity-100 data-[state=closed]:opacity-0 rounded " +
          className
        }
        {...props}
      />
    </DialogPrimitives.Positioner>
  </Portal>
));
AlertDialogContent.displayName = DialogPrimitives.Content.displayName;

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={"flex flex-col space-y-2 text-center sm:text-left " + className}
    {...props}
  />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={"flex flex-col gap-y-2 items-stretch" + className}
    {...props}
  />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitives.Title
    ref={ref}
    className={"text-lg font-semibold text-base-800 " + className}
    {...props}
  />
));
AlertDialogTitle.displayName = DialogPrimitives.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitives.Description
    ref={ref}
    className={"text-sm text-base-500 " + className}
    {...props}
  />
));
AlertDialogDescription.displayName = DialogPrimitives.Description.displayName;

// const AlertDialogAction = React.forwardRef<
//   React.ElementRef<typeof DialogPrimitives.Action>,
//   React.ComponentPropsWithoutRef<typeof DialogPrimitives.Action>
// >(({ className, ...props }, ref) => (
//   <DialogPrimitives.Action
//     ref={ref}
//     className={buttonStyle({ className })}
//     {...props}
//   />
// ));
// AlertDialogAction.displayName = DialogPrimitives.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof DialogPrimitives.CloseTrigger>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.CloseTrigger>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitives.CloseTrigger
    asChild
    ref={ref}
    className={className}
    {...props}
  >
    <Button variant="outline">{children}</Button>
  </DialogPrimitives.CloseTrigger>
));
AlertDialogCancel.displayName = "AlertDialogCancel";

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
};
`