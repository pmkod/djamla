"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  toggleGroupCode,
  ToggleGroupExample,
  toggleGroupExampleCode,
} from "@repo/react-ui";

const ToggleGroupPage = () => {
  return (
    <>
      <DocText>Toggle Group</DocText>
      <DocText level="paragraph">A set of connected toggle controls.</DocText>
      <ComponentPreview>
        <ToggleGroupExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {toggleGroupCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <ToggleGroupExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {toggleGroupExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default ToggleGroupPage;
