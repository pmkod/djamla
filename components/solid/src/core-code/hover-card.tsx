export const hoverCardCode = `"use client";

import { HoverCard as HoverCardPrimitives,  } from "@ark-ui/solid";
import { splitProps } from "solid-js";
// import { forwardRef } from "react";

const HoverCard = HoverCardPrimitives.Root;

const HoverCardTrigger = HoverCardPrimitives.Trigger;

const HoverCardContent = (props: HoverCardPrimitives.ContentProps) =>
    
    {
        const [local, rest] = splitProps(props, ['class'])
        return(
    
    <HoverCardPrimitives.Positioner>
      <HoverCardPrimitives.Content
        class={
          "border-base-100 bg-base-0 text-base-800 z-50 block w-max rounded-sm border p-4 shadow-md outline-none transition-all duration-200 data-[state=open]:visible data-[state=closed]:invisible data-[state=closed]:scale-95 data-[state=open]:scale-100 data-[state=closed]:opacity-0 data-[state=open]:opacity-100 " +
          local.class
        }
        {...rest}
      />
    </HoverCardPrimitives.Positioner>
)};

export { HoverCard, HoverCardContent, HoverCardTrigger };
`