"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  NativeSelect,
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
      <ComponentPreview
        defaultVariant="outline"
        variants={["outline", "soft", "plain"]}
        defaultSize="md"
        sizes={["sm", "md", "lg"]}
      >
        <NativeSelect size="lg">
          <option value="1">Item 1</option>
          <option value="2">Item 2</option>
          <option value="3">Item 3</option>
          <option value="4">Item 4</option>
        </NativeSelect>
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
