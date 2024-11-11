"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  accordionCode,
  AccordionExample,
  accordionExampleCode,
} from "@repo/react-ui";

const AccordionPage = () => {
  return (
    <>
      <DocText>Accordion</DocText>
      <DocText level="paragraph">
        A collapsible element that reveals and hides content sections.
      </DocText>
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
