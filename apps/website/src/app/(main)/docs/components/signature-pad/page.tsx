import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  signaturePadCode,
  SignaturePadExample,
  signaturePadExampleCode,
} from "@repo/react-ui";

import { Metadata } from "next";

const title = "Signature Pad";
const description = "A canvas for capturing handwritten signatures.";

export const metadata: Metadata = {
  title,
  description,
};

const SignaturePadPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <SignaturePadExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {signaturePadCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <SignaturePadExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {signaturePadExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default SignaturePadPage;
