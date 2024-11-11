"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  nativeSelectCode,
  NativeSelectExample,
  nativeSelectExampleCode,
} from "@repo/react-ui";

const NativeSelectPage = () => {
  return (
    <>
      <DocText>Native Select</DocText>
      <DocText level="paragraph">
        A platform-native dropdown selection control.{" "}
      </DocText>
      <ComponentPreview>
        <NativeSelectExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {nativeSelectCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <NativeSelectExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {nativeSelectExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default NativeSelectPage;
