"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  contextMenuCode,
  ContextMenuExample,
  contextMenuExampleCode,
} from "@repo/react-ui";

const ContextMenuPage = () => {
  return (
    <>
      <DocText>Context Menu</DocText>
      <DocText level="paragraph">
        A floating menu triggered by right-click interaction.
      </DocText>
      <ComponentPreview>
        <ContextMenuExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {contextMenuCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <ContextMenuExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {contextMenuExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default ContextMenuPage;
