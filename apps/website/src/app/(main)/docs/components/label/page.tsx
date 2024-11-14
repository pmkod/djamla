"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { labelCode, LabelExample, labelExampleCode } from "@repo/react-ui";

const LabelPage = () => {
  return (
    <>
      <DocText>Label</DocText>
      <DocText level="paragraph">A caption for interface elements.</DocText>
      <ComponentPreview>
        <LabelExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{labelCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <LabelExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {labelExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default LabelPage;
