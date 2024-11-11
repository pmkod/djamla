"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  hoverCardCode,
  HoverCardExample,
  hoverCardExampleCode,
} from "@repo/react-ui";

const HoverCardPage = () => {
  return (
    <>
      <DocText>Hover Card</DocText>
      <DocText level="paragraph">
        A floating card that appears on element hover.{" "}
      </DocText>
      <ComponentPreview>
        <HoverCardExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {hoverCardCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <HoverCardExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {hoverCardExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default HoverCardPage;
