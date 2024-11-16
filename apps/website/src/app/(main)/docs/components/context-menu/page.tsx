import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  contextMenuCode,
  ContextMenuExample,
  contextMenuExampleCode,
} from "@repo/react-ui";
import { Metadata } from "next";

const title = "Context Menu";
const description = "A floating menu triggered by right-click interaction.";

export const metadata: Metadata = {
  title,
  description,
};

const ContextMenuPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
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
