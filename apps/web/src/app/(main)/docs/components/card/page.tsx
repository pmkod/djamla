"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { cardCode, CardExample, cardExampleCode } from "@repo/react-ui";

const CardPage = () => {
  return (
    <>
      <DocText>Card</DocText>
      <DocText level="paragraph">
        A container for organizing related content.
      </DocText>
      <ComponentPreview>
        <CardExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{cardCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <CardExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {cardExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default CardPage;
