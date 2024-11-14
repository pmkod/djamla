"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  popoverCode,
  PopoverExample,
  popoverExampleCode,
} from "@repo/react-ui";

const PopoverPage = () => {
  return (
    <>
      <DocText>Popover</DocText>
      <DocText level="paragraph">A floating content container.</DocText>
      <ComponentPreview>
        <PopoverExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{popoverCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <PopoverExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {popoverExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default PopoverPage;
