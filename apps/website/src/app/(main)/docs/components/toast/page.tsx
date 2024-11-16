import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { toastCode, ToastExample, toastExampleCode } from "@repo/react-ui";
import { Metadata } from "next";

const title = "Toast";
const description = "A temporary notification message.";

export const metadata: Metadata = {
  title,
  description,
};

const ToastPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
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
