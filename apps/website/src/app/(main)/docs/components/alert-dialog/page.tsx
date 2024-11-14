"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  alertDialogCode,
  AlertDialogExample,
  alertDialogExampleCode,
} from "@repo/react-ui";

const AlertDialogPage = () => {
  return (
    <>
      <DocText>Alert Dialog</DocText>
      <DocText level="paragraph">
        An interruptive modal that requires user response.
      </DocText>
      <ComponentPreview>
        <AlertDialogExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {alertDialogCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <AlertDialogExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {alertDialogExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default AlertDialogPage;
