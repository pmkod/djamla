"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { modalCode, ModalExample, modalExampleCode } from "@repo/react-ui";

const ModalPage = () => {
  return (
    <>
      <DocText>Modal</DocText>
      <DocText level="paragraph">
        An overlay dialog for focused content.
      </DocText>
      <ComponentPreview>
        <ModalExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{modalCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <ModalExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {modalExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default ModalPage;
