"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { toastCode, ToastExample, toastExampleCode } from "@repo/react-ui";

const ToastPage = () => {
  return (
    <>
      <DocText>Toast</DocText>
      <DocText level="paragraph">A temporary notification message.</DocText>
      <ComponentPreview>
        <ToastExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{toastCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <ToastExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {toastExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default ToastPage;
