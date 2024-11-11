"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { kbdCode, KbdExample, kbdExampleCode } from "@repo/react-ui";

const KbdPage = () => {
  return (
    <>
      <DocText>Kbd</DocText>
      <DocText level="paragraph">
        A visual element representing keyboard input.
      </DocText>
      <ComponentPreview>
        <KbdExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{kbdCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <KbdExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {kbdExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default KbdPage;
