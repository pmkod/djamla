"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { tableCode, TableExample, tableExampleCode } from "@repo/react-ui";

const TablePage = () => {
  return (
    <>
      <DocText>Table</DocText>
      <DocText level="paragraph">
        A grid for displaying structured data.
      </DocText>
      <ComponentPreview>
        <TableExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{tableCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <TableExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {tableExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default TablePage;
