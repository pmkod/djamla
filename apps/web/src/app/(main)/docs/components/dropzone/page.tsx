"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  dropzoneCode,
  DropzoneExample,
  dropzoneExampleCode,
} from "@repo/react-ui";

const DropzonePage = () => {
  return (
    <>
      <DocText>Dropzone</DocText>
      <DocText level="paragraph">
        An area that accepts file drops and uploads.
      </DocText>
      <ComponentPreview>
        <DropzoneExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {dropzoneCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <DropzoneExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {dropzoneExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default DropzonePage;
