"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { ratingCode, RatingExample, ratingExampleCode } from "@repo/react-ui";

const RatingPage = () => {
  return (
    <>
      <DocText>Rating</DocText>
      <DocText level="paragraph">An interactive score display system.</DocText>
      <ComponentPreview>
        <RatingExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{ratingCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <RatingExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {ratingExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default RatingPage;
