"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  breadcrumbCode,
  BreadcrumbExample,
  breadcrumbExampleCode,
} from "@repo/react-ui";

const BreadcrumbPage = () => {
  return (
    <>
      <DocText>Breadcrumb</DocText>
      <DocText level="paragraph">
        A navigation element showing the current location hierarchy.{" "}
      </DocText>
      <ComponentPreview>
        <BreadcrumbExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {breadcrumbCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <BreadcrumbExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {breadcrumbExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default BreadcrumbPage;
