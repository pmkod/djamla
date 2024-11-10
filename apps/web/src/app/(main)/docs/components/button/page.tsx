"use client";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocTitle } from "@/components/core/doc-title";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { Button, buttonCode, buttonExampleCode } from "@repo/react-ui";
import React from "react";

const ButtonPage = () => {
  return (
    <>
      <DocTitle>Button</DocTitle>
      <ComponentPreview
        defaultVariant="solid"
        variants={["solid", "outline", "ghost"]}
        defaultColorScheme="primary"
        defaultSize="md"
        sizes={["xs", "sm", "md", "lg", "xl"]}
        colorSchemes={["primary", "red", "black"]}
      >
        <Button>Button</Button>
      </ComponentPreview>
      <DocTitle level="two">Installation</DocTitle>
      <SyntaxHighlighter language="typescript">{buttonCode}</SyntaxHighlighter>
      <DocTitle level="two">Example</DocTitle>
      <SyntaxHighlighter language="typescript">
        {buttonExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default ButtonPage;
