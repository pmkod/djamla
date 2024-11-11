"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
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
      <ComponentPreview>
        <ClipboardExample />
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
