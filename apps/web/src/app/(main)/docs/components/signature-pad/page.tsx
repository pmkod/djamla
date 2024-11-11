"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  signaturePadCode,
  SignaturePadExample,
  signaturePadExampleCode,
} from "@repo/react-ui";

const SignaturePadPage = () => {
  return (
    <>
      <DocText>Signature Pad</DocText>
      <DocText level="paragraph">
        A canvas for capturing handwritten signatures.
      </DocText>
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
