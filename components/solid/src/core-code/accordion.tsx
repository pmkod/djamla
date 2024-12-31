export const accordionCode = `"use client";

import { Accordion as AccordionPrimitives } from "@ark-ui/solid";
import { IconChevronDown } from "@tabler/icons-solidjs";

const Accordion = (props: AccordionPrimitives.RootProps) => (
  <AccordionPrimitives.Root multiple collapsible {...props} />
);

// 
// 
// 
// 
// 
const AccordionItem = (( props: AccordionPrimitives.ItemProps) => (
  <AccordionPrimitives.Item class="border-b" {...props} />
));


const AccordionItemSummary = (props: AccordionPrimitives.ItemTriggerProps) => (
  <AccordionPrimitives.ItemTrigger
    class="text-base-800 hover:bg-base-100 inline-flex w-full items-center justify-between px-4 py-2.5 font-medium transition-all disabled:opacity-40 disabled:hover:bg-transparent [&[data-state=open]>svg]:rotate-180"
    {...props}
  >
    {props.children}
    <AccordionPrimitives.ItemIndicator>
      <IconChevronDown class="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitives.ItemIndicator>
  </AccordionPrimitives.ItemTrigger>
);


const AccordionItemDetails = (props:AccordionPrimitives.ItemContentProps) => (
  <AccordionPrimitives.ItemContent
    class="text-base-500 grid overflow-hidden text-sm transition-all duration-300 ease-in-out data-[state=closed]:grid-rows-[0fr] data-[state=open]:grid-rows-[1fr]"
    {...props}
  >
    <div class="overflow-hidden">
      <div class="px-4 pb-2 pt-1">{props.children}</div>
    </div>
  </AccordionPrimitives.ItemContent>
);

AccordionItemDetails.displayName = "AccordionItemDetails";

export { Accordion, AccordionItem, AccordionItemDetails, AccordionItemSummary };
`