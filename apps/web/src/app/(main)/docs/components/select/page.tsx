"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { selectCode, SelectExample, selectExampleCode } from "@repo/react-ui";

const SelectPage = () => {
  return (
    <>
      <DocText>Select</DocText>
      <DocText level="paragraph">
        A customizable dropdown selection control.
      </DocText>
      <ComponentPreview>
        <SelectExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{selectCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <SelectExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {selectExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default SelectPage;
