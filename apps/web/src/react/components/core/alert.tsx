"use client";
import { ComponentPropsWithRef, forwardRef, HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ark } from "@ark-ui/react";

const alertVariants = cva("relative flex gap-3 w-full rounded px-4 py-3", {
  variants: {
    variant: {
      solid: "text-white",
      outline: "border border-gray-300",
      soft: "",
      plain: "",
    },
    colorScheme: {
      primary: "",
      red: "",
      green: "",
      black: "",
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      colorScheme: "primary",
      className: "bg-indigo-500",
    },
    {
      variant: "outline",
      colorScheme: "primary",
      className: "text-indigo-500",
    },
    {
      variant: "soft",
      colorScheme: "primary",
      className: "bg-indigo-100 text-indigo-500",
    },
    {
      variant: "plain",
      colorScheme: "primary",
      className: "text-indigo-500",
    },
    {
      variant: "solid",
      colorScheme: "green",
      className: "bg-green-500",
    },
    {
      variant: "outline",
      colorScheme: "green",
      className: "text-green-600",
    },
    {
      variant: "soft",
      colorScheme: "green",
      className: "bg-green-200 text-green-700",
    },
    {
      variant: "plain",
      colorScheme: "green",
      className: "text-green-500",
    },
    {
      variant: "solid",
      colorScheme: "red",
      className: "bg-red-500",
    },
    {
      variant: "outline",
      colorScheme: "red",
      className: "text-red-600",
    },
    {
      variant: "soft",
      colorScheme: "red",
      className: "bg-red-100 text-red-600",
    },
    {
      variant: "plain",
      colorScheme: "red",
      className: "text-red-600",
    },
    //
    {
      variant: "solid",
      colorScheme: "black",
      className: "bg-neutral-900",
    },
    {
      variant: "outline",
      colorScheme: "black",
      className: " text-neutral-900",
    },
    {
      variant: "soft",
      colorScheme: "black",
      className: "bg-neutral-200 text-neutral-900",
    },
    {
      variant: "plain",
      colorScheme: "black",
      className: "text-neutral-900",
    },
  ],
  defaultVariants: {
    variant: "solid",
    colorScheme: "black",
  },
});

const Alert = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, colorScheme, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={alertVariants({ variant, colorScheme, className })}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertIcon = forwardRef<
  HTMLDivElement,
  ComponentPropsWithRef<typeof ark.div>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
AlertIcon.displayName = "AlertTitle";

const AlertContent = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
AlertIcon.displayName = "AlertTitle";

const AlertTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={
      "mb-1 text-base font-medium leading-none tracking-tight " + className
    }
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={"text-sm [&_p]:leading-relaxed " + className}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertIcon, AlertContent, AlertTitle, AlertDescription };
