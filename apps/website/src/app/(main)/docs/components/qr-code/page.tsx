"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { popoverCode, QrCodeExample, qrCodeExampleCode } from "@repo/react-ui";

const QrCodePage = () => {
  return (
    <>
      <DocText>QR code</DocText>
      <DocText level="paragraph">A generator for QR code images.</DocText>
      <ComponentPreview>
        <QrCodeExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{popoverCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <QrCodeExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {qrCodeExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default QrCodePage;
