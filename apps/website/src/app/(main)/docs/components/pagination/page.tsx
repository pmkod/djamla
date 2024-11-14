"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  paginationCode,
  PaginationExample,
  paginationExampleCode,
} from "@repo/react-ui";

const PaginationPage = () => {
  return (
    <>
      <DocText>Pagination</DocText>
      <DocText level="paragraph">
        A control for navigating through pages.
      </DocText>
      <ComponentPreview>
        <PaginationExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {paginationCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <PaginationExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {paginationExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default PaginationPage;
