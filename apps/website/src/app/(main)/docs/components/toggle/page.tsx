"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { toggleCode, ToggleExample, toggleExampleCode } from "@repo/react-ui";

const TogglePage = () => {
  return (
    <>
      <DocText>Toggle</DocText>
      <DocText level="paragraph">
        A button that switches between states.
      </DocText>
      <ComponentPreview>
        <ToggleExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{toggleCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <ToggleExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {toggleExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default TogglePage;
