import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  accordionCode,
  AccordionExample,
  accordionExampleCode,
} from "@repo/react-ui";
import { Metadata } from "next";

const title = "Accordion";
const description =
  "A collapsible element that reveals and hides content sections.";

export const metadata: Metadata = {
  title,
  description,
};

const AccordionPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <AccordionExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {accordionCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <AccordionExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {accordionExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default AccordionPage;
