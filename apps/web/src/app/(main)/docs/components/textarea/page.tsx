"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  textareaCode,
  TextareaExample,
  textareaExampleCode,
} from "@repo/react-ui";

const TextareaPage = () => {
  return (
    <>
      <DocText>Textarea</DocText>
      <DocText level="paragraph">A multiline text input field.</DocText>
      <ComponentPreview>
        <TextareaExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {textareaCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <TextareaExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {textareaExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default TextareaPage;
