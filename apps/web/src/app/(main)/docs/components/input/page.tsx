"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { inputCode, InputExample, inputExampleCode } from "@repo/react-ui";

const InputPage = () => {
  return (
    <>
      <DocText>Input</DocText>
      <DocText level="paragraph">
        A field for accepting user text input.
      </DocText>
      <ComponentPreview>
        <InputExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{inputCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <InputExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {inputExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default InputPage;
