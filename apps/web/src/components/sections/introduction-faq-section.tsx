import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemDetails,
  AccordionItemSummary,
} from "@/react/components/core/accordion";

export const IntroductionFaqSection = () => {
  return (
    <div>
      <Accordion>
        <AccordionItem value="b">
          <AccordionItemSummary>
            Wich frameworks are supported ?
          </AccordionItemSummary>
          <AccordionItemDetails>
            You can use it with all react based frameworks.
          </AccordionItemDetails>
        </AccordionItem>

        <AccordionItem value="c">
          <AccordionItemSummary>
            Can i use this in my project ?
          </AccordionItemSummary>
          <AccordionItemDetails>
            Yes, you can use it, it's open source.
          </AccordionItemDetails>
        </AccordionItem>

        <AccordionItem value="a">
          <AccordionItemSummary>
            Why not cn function like shadcn to merge tailwind classes
          </AccordionItemSummary>
          <AccordionItemDetails>
            I am not fan of overriding design system components class
          </AccordionItemDetails>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
