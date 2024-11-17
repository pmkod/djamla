"use client";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Avatar as AvatarPrimitives } from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";

const avatarStyle = cva(
  "bg-base-200 relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        xs: "size-8 text-xs",
        sm: "size-9 text-sm",
        md: "size-10",
        lg: "size-11 text-lg",
        xl: "size-12 text-xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const Avatar = forwardRef<
  ElementRef<typeof AvatarPrimitives.Root> & VariantProps<typeof avatarStyle>,
  ComponentPropsWithoutRef<typeof AvatarPrimitives.Root> &
    VariantProps<typeof avatarStyle>
>(({ className, size, ...props }, ref) => (
  <AvatarPrimitives.Root
    ref={ref}
    className={avatarStyle({ size, className })}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitives.Root.displayName;

const AvatarImage = forwardRef<
  ElementRef<typeof AvatarPrimitives.Image>,
  ComponentPropsWithoutRef<typeof AvatarPrimitives.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitives.Image
    ref={ref}
    className={"bg-base-200 aspect-square h-full w-full " + className}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitives.Image.displayName;

const AvatarFallback = forwardRef<
  ElementRef<typeof AvatarPrimitives.Fallback>,
  ComponentPropsWithoutRef<typeof AvatarPrimitives.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitives.Fallback
    ref={ref}
    className={
      "bg-base-200 text-base-400 flex h-full w-full items-center justify-center rounded-full text-[length:inherit] font-normal " +
      className
    }
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitives.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
