"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  collapsibleCode,
  CollapsibleExample,
  collapsibleExampleCode,
} from "@repo/react-ui";

const CollapsiblePage = () => {
  return (
    <>
      <DocText>Collapsible</DocText>
      <DocText level="paragraph">
        An expandable container that shows or hides content.
      </DocText>
      <ComponentPreview>
        <CollapsibleExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {collapsibleCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <CollapsibleExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {collapsibleExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default CollapsiblePage;
