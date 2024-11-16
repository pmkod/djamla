import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { popoverCode, QrCodeExample, qrCodeExampleCode } from "@repo/react-ui";

import { Metadata } from "next";

const title = "QR code";
const description = "A floating content container.";

export const metadata: Metadata = {
  title,
  description,
};

const QrCodePage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
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
