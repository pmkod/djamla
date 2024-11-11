"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  checkboxCode,
  CheckboxExample,
  checkboxExampleCode,
} from "@repo/react-ui";

const CheckboxPage = () => {
  return (
    <>
      <DocText>Checkbox</DocText>
      <DocText level="paragraph">
        A slideshow component for cycling through content.
      </DocText>
      <ComponentPreview>
        <CheckboxExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {checkboxCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <CheckboxExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {checkboxExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default CheckboxPage;
