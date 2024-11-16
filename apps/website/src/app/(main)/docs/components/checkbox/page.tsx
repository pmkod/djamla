import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  Checkbox,
  checkboxCode,
  CheckboxExample,
  checkboxExampleCode,
} from "@repo/react-ui";
import { Metadata } from "next";

const title = "Checkbox";
const description = "A slideshow component for cycling through content.";

export const metadata: Metadata = {
  title,
  description,
};

const CheckboxPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview
        defaultSize="md"
        sizes={["sm", "md", "lg", "xl"]}
        defaultColorScheme="primary"
        colorSchemes={["primary", "black"]}
      >
        <Checkbox defaultChecked />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {checkboxCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <CheckboxExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {checkboxExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default CheckboxPage;
