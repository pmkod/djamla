import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  Clipboard,
  clipboardCode,
  ClipboardExample,
  clipboardExampleCode,
} from "@repo/react-ui";
import { Metadata } from "next";

const title = "Clipboard";
const description = "A component for copying and pasting content.";

export const metadata: Metadata = {
  title,
  description,
};

const ClipboardPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview defaultSize="md" sizes={["xs", "sm", "md", "lg", "xl"]}>
        <Clipboard value="https://ark-ui.com" />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {clipboardCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <ClipboardExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {clipboardExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default ClipboardPage;
