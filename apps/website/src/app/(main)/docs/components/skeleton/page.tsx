import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  skeletonCode,
  SkeletonExample,
  skeletonExampleCode,
} from "@repo/react-ui";

import { Metadata } from "next";

const title = "Skeleton";
const description = "A placeholder for loading content.";

export const metadata: Metadata = {
  title,
  description,
};

const SkeletonPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
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
