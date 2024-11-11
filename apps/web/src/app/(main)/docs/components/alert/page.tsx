"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { alertCode, AlertExample, alertExampleCode } from "@repo/react-ui";

const AlertPage = () => {
  return (
    <>
      <DocText>Alert</DocText>
      <DocText level="paragraph">
        A message that displays important information.{" "}
      </DocText>
      <ComponentPreview>
        <AlertExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{alertCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <AlertExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {alertExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default AlertPage;
