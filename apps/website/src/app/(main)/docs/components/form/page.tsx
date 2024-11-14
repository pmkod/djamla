"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { formCode, FormExample, formExampleCode } from "@repo/react-ui";

const FormPage = () => {
  return (
    <>
      <DocText>Form</DocText>
      <DocText level="paragraph">
        A container for collecting and validating user input.
      </DocText>
      <ComponentPreview>
        <FormExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{formCode}</SyntaxHighlighter>
      {/* <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <FormExample />
      </ComponentPreview> */}
      <DocText level="titleTwo">Example code</DocText>

      <SyntaxHighlighter language="typescript">
        {formExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default FormPage;
