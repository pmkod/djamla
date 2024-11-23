"use client";
import { Collapsible as CollapsiblePrimitives } from "@ark-ui/react";
import { forwardRef } from "react";

const Collapsible = CollapsiblePrimitives.Root;

const CollapsibleTrigger = CollapsiblePrimitives.Trigger;

const CollapsibleContent = forwardRef<
  React.ElementRef<typeof CollapsiblePrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitives.Content>
>(({ className, children, ...props }, ref) => (
  <CollapsiblePrimitives.Content
    ref={ref}
    className={
      "grid overflow-hidden text-sm transition-all duration-300 ease-in-out data-[state=closed]:grid-rows-[0fr] data-[state=open]:grid-rows-[1fr] " +
      className
    }
    {...props}
  >
    <div className="overflow-hidden">
      <div className="pb-2 pt-1">{children}</div>
    </div>
  </CollapsiblePrimitives.Content>
));

CollapsibleContent.displayName = "CollapsibleContent";

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
