export const accordionCode = `"use client";

import { Accordion as AccordionPrimitives } from "@ark-ui/react";
import { IconChevronDown } from "@tabler/icons-react";
import { forwardRef } from "react";

const Accordion = forwardRef<
  React.ElementRef<typeof AccordionPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Root>
>(({ className, ...props }, ref) => (
  <AccordionPrimitives.Root ref={ref} multiple collapsible {...props} />
));

Accordion.displayName = "Accordion";

const AccordionItem = forwardRef<
  React.ElementRef<typeof AccordionPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitives.Item ref={ref} className={"border-b"} {...props} />
));

AccordionItem.displayName = "AccordionItem";

const AccordionItemSummary = forwardRef<
  React.ElementRef<typeof AccordionPrimitives.ItemTrigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.ItemTrigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitives.ItemTrigger
    ref={ref}
    className="inline-flex w-full items-center justify-between px-4 py-2.5 font-medium transition-all hover:bg-base-100 disabled:opacity-40 disabled:hover:bg-transparent [&[data-state=open]>svg]:rotate-180"
    {...props}
  >
    {children}
    <AccordionPrimitives.ItemIndicator asChild>
      <IconChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitives.ItemIndicator>
  </AccordionPrimitives.ItemTrigger>
));

AccordionItemSummary.displayName = "AccordionItemSummary";

const AccordionItemDetails = forwardRef<
  React.ElementRef<typeof AccordionPrimitives.ItemContent>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.ItemContent>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitives.ItemContent
    ref={ref}
    className="grid overflow-hidden text-sm transition-all duration-300 ease-in-out data-[state=closed]:grid-rows-[0fr] data-[state=open]:grid-rows-[1fr]"
    {...props}
  >
    <div className="overflow-hidden">
      <div className="px-4 pb-2 pt-1">{children}</div>
    </div>
  </AccordionPrimitives.ItemContent>
));

AccordionItemDetails.displayName = "AccordionItemDetails";

export { Accordion, AccordionItem, AccordionItemSummary, AccordionItemDetails };
`