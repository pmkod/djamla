"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  linearProgressCode,
  LinearProgressExample,
  linearProgressExampleCode,
} from "@repo/react-ui";

const LinearProgressPage = () => {
  return (
    <>
      <DocText>Linear Progress</DocText>
      <DocText level="paragraph">
        A bar indicating process completion status.
      </DocText>
      <ComponentPreview>
        <LinearProgressExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {linearProgressCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <LinearProgressExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {linearProgressExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default LinearProgressPage;
