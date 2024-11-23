export const hoverCardCode = `"use client";

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
          "border-base-100 bg-base-0 text-base-800 z-50 block w-max rounded-sm border p-4 shadow-md outline-none transition-all duration-200 data-[state=open]:visible data-[state=closed]:invisible data-[state=closed]:scale-95 data-[state=open]:scale-100 data-[state=closed]:opacity-0 data-[state=open]:opacity-100 " +
          className
        }
        {...props}
      />
    </HoverCardPrimitives.Positioner>
  </Portal>
));
HoverCardContent.displayName = HoverCardPrimitives.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
`;
