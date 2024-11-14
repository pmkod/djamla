"use client";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  IconButton,
  iconButtonCode,
  IconButtonExample,
  iconButtonExampleCode,
} from "@repo/react-ui";
import { IconPlus } from "@tabler/icons-react";
import React from "react";

const IconButtonPage = () => {
  return (
    <>
      <DocText>Icon Button</DocText>
      <DocText level="paragraph">
        A button component represented by an icon.
      </DocText>
      <ComponentPreview
        defaultVariant="solid"
        variants={["solid", "outline", "ghost"]}
        defaultColorScheme="primary"
        defaultSize="md"
        sizes={["xs", "sm", "md", "lg", "xl"]}
        colorSchemes={["primary", "red", "black"]}
        isLoading={false}
        fullWidth={false}
        disabled={false}
      >
        <IconButton>
          <IconPlus />
        </IconButton>
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {iconButtonCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <IconButtonExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {iconButtonExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default IconButtonPage;
