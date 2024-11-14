"use client";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  Button,
  buttonCode,
  ButtonExample,
  buttonExampleCode,
} from "@repo/react-ui";
import React from "react";

const ButtonPage = () => {
  return (
    <>
      <DocText>Button</DocText>
      <DocText level="paragraph">
        An interactive element designed to trigger actions.
      </DocText>
      <ComponentPreview
        defaultVariant="solid"
        variants={["solid", "outline", "ghost"]}
        defaultColorScheme="primary"
        colorSchemes={["primary", "red", "black"]}
        defaultSize="md"
        sizes={["xs", "sm", "md", "lg", "xl"]}
        isLoading={false}
        fullWidth={false}
        disabled={false}
      >
        <Button>Button</Button>
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{buttonCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <ButtonExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {buttonExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default ButtonPage;
