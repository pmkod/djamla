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
  <>
    <DialogPrimitives.Backdrop className="duration-400 pointer-events-none fixed inset-0 z-50 block bg-neutral-800 bg-opacity-0 backdrop-blur-sm backdrop-brightness-50 transition-all data-[state=open]:visible data-[state=closed]:invisible data-[state=open]:bg-opacity-50" />

    <DialogPrimitives.Positioner className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center">
      <DialogPrimitives.Content
        ref={ref}
        className={
          "bg-base-0 data-[state=closed]:translate-0 grid w-96 max-w-lg gap-4 rounded p-6 shadow-lg transition-all duration-200 data-[state=open]:visible data-[state=closed]:invisible data-[state=open]:-translate-y-14 data-[state=closed]:opacity-0 data-[state=open]:opacity-100 " +
          className
        }
        {...props}
      />
    </DialogPrimitives.Positioner>
  </>
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
    className={"flex flex-col items-stretch gap-y-2 " + className}
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
    className={"text-base-800 text-lg font-semibold " + className}
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
    className={"text-base-500 text-sm " + className}
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
    <Button variant="outline" colorScheme="black">
      {children}
    </Button>
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
`;
