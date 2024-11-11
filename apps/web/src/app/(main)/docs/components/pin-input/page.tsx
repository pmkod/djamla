"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  pinInputCode,
  PinInputExample,
  pinInputExampleCode,
} from "@repo/react-ui";

const PinInputPage = () => {
  return (
    <>
      <DocText>Pin Input</DocText>
      <DocText level="paragraph">A segmented input for entering codes.</DocText>
      <ComponentPreview>
        <PinInputExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {pinInputCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <PinInputExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {pinInputExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default PinInputPage;
