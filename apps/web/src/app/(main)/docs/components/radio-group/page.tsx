"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  radioGroupCode,
  RadioGroupExample,
  radioGroupExampleCode,
} from "@repo/react-ui";

const RadioGroupPage = () => {
  return (
    <>
      <DocText>Radio Group</DocText>
      <DocText level="paragraph">A set of mutually exclusive options.</DocText>
      <ComponentPreview>
        <RadioGroupExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {radioGroupCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <RadioGroupExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {radioGroupExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default RadioGroupPage;
