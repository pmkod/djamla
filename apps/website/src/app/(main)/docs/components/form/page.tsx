import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { formCode, FormExample, formExampleCode } from "@repo/react-ui";
import { Metadata } from "next";

const title = "Form";
const description = "A container for collecting and validating user input.";

export const metadata: Metadata = {
  title,
  description,
};

const FormPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
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
