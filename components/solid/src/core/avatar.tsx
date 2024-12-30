"use client";
import { Avatar as AvatarPrimitives } from "@ark-ui/solid";
import { cva, VariantProps } from "class-variance-authority";
import { splitProps } from "solid-js";


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

interface AvatarProps extends AvatarPrimitives.RootProps, VariantProps<typeof avatarStyle>{}
const Avatar = (props: AvatarProps) => {
    const [local, restProps] = splitProps(props, ['size'])
    return (

  <AvatarPrimitives.Root
  class={avatarStyle({ size: local.size })}
  {...restProps}
/>
    )
}

const AvatarImage = (props: AvatarPrimitives.ImageProps) => (
  <AvatarPrimitives.Image
    class={"bg-base-200 aspect-square h-full w-full " + props.class}
    {...props}
  />
);

const AvatarFallback = (props: AvatarPrimitives.FallbackProps) => (
  <AvatarPrimitives.Fallback
    
    class={
      "bg-base-200 text-base-400 flex h-full w-full items-center justify-center rounded-full text-[length:inherit] font-normal " +
      props.class
    }
    {...props}
  />
);

export { Avatar, AvatarFallback, AvatarImage };
