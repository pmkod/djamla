"use client";

import { forwardRef } from "react";
import { HoverCard as HoverCardPrimitives, Portal } from "@ark-ui/react";

const HoverCard = HoverCardPrimitives.Root;

const HoverCardTrigger = HoverCardPrimitives.Trigger;

const HoverCardContent = forwardRef<
  React.ElementRef<typeof HoverCardPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitives.Content>
>(({ className, ...props }, ref) => (
  <Portal>
    <HoverCardPrimitives.Positioner>
      <HoverCardPrimitives.Content
        ref={ref}
        className={
          "z-50 w-max rounded-sm border border-neutral-200 bg-white p-4 text-neutral-800 shadow-md outline-none data-[state=open]:visible data-[state=closed]:invisible data-[state=open]:opacity-100 data-[state=closed]:opacity-50 data-[state=open]:scale-100 data-[state=closed]:scale-50 transition-all ease-in duration-500 " +
          className
        }
        {...props}
      />
    </HoverCardPrimitives.Positioner>
  </Portal>
));
HoverCardContent.displayName = HoverCardPrimitives.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
