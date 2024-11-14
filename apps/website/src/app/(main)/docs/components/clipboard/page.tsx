"use client";
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

const ClipboardPage = () => {
  return (
    <>
      <DocText>Clipboard</DocText>
      <DocText level="paragraph">
        A component for copying and pasting content.
      </DocText>
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
