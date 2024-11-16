import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { toggleCode, ToggleExample, toggleExampleCode } from "@repo/react-ui";
import { Metadata } from "next";

const title = "Toggle";
const description = "A button that switches between states.";

export const metadata: Metadata = {
  title,
  description,
};

const TogglePage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
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
