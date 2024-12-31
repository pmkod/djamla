export const solidCollapsibleCode = `"use client";
import { Collapsible as CollapsiblePrimitives } from "@ark-ui/solid";

const Collapsible = CollapsiblePrimitives.Root;

const CollapsibleTrigger = CollapsiblePrimitives.Trigger;

const CollapsibleContent = (props: CollapsiblePrimitives.RootProps) =>
    
    
    {
        const {children} = props
        return(
  <CollapsiblePrimitives.Content
    class={
      "grid overflow-hidden text-sm transition-all duration-300 ease-in-out data-[state=closed]:grid-rows-[0fr] data-[state=open]:grid-rows-[1fr] " +
      props.class
    }
    {...props}
  >
    <div class="overflow-hidden">
      <div class="pb-2 pt-1">{children}</div>
    </div>
  </CollapsiblePrimitives.Content>
)};


export { Collapsible, CollapsibleContent, CollapsibleTrigger };
`