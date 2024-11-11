"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { loaderCode, LoaderExample, loaderExampleCode } from "@repo/react-ui";

const LoaderPage = () => {
  return (
    <>
      <DocText>Loader</DocText>
      <DocText level="paragraph">
        A visual indicator for loading states.
      </DocText>
      <ComponentPreview>
        <LoaderExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{loaderCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <LoaderExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {loaderExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default LoaderPage;
