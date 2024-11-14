"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  Switch,
  switchCode,
  SwitchExample,
  switchExampleCode,
} from "@repo/react-ui";

const SwitchPage = () => {
  return (
    <>
      <DocText>Siwtch</DocText>
      <DocText level="paragraph">A toggle control for binary states.</DocText>
      <ComponentPreview
        defaultColorScheme="primary"
        colorSchemes={["primary", "black"]}
        defaultSize="md"
        sizes={["sm", "md", "lg"]}
      >
        <Switch />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{switchCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <SwitchExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {switchExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default SwitchPage;
