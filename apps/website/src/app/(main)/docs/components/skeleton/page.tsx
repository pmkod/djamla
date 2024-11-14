"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  skeletonCode,
  SkeletonExample,
  skeletonExampleCode,
} from "@repo/react-ui";

const SkeletonPage = () => {
  return (
    <>
      <DocText>Skeleton</DocText>
      <DocText level="paragraph">A placeholder for loading content.</DocText>
      <ComponentPreview>
        <SkeletonExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {skeletonCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <SkeletonExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {skeletonExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default SkeletonPage;
