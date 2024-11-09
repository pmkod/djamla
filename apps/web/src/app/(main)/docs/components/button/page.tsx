"use client";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocTitle } from "@/components/core/doc-title";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { Button } from "@/react/components/core/button";
import React from "react";

const ButtonPage = () => {
  return (
    <>
      <DocTitle>Button</DocTitle>
      <ComponentPreview
        defaultVariant="solid"
        variants={["solid", "outline", "ghost"]}
        defaultColorScheme="primary"
        sizes={["xs", "sm", "md", "lg", "xl"]}
        colorSchemes={["primary", "red", "black"]}
      >
        <Button>Button</Button>
      </ComponentPreview>
      <DocTitle level="two">Installation</DocTitle>
      <SyntaxHighlighter language="typescript">
        {`let myAdd: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};`}
      </SyntaxHighlighter>
      <DocTitle level="two">Example</DocTitle>
      <ComponentPreview defaultVariant="solid" defaultColorScheme="primary">
        <Button>Button</Button>
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {`let myAdd: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};`}
      </SyntaxHighlighter>
    </>
  );
};

export default ButtonPage;
