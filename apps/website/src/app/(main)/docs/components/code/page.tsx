import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { Code, codeCode, CodeExample, codeExampleCode } from "@repo/react-ui";
import { Metadata } from "next";

const title = "Code";
const description = "A container for displaying formatted code snippets.";

export const metadata: Metadata = {
  title,
  description,
};

const CodePage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview defaultSize="md" sizes={["sm", "md", "lg"]}>
        <Code size="sm">@ark-ui/react</Code>
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{codeCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <CodeExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {codeExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default CodePage;
