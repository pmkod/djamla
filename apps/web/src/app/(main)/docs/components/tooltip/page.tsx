"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  tooltipCode,
  TooltipExample,
  tooltipExampleCode,
} from "@repo/react-ui";

const TooltipPage = () => {
  return (
    <>
      <DocText>Tooltip</DocText>
      <DocText level="paragraph">
        A floating label for additional information.
      </DocText>
      <ComponentPreview>
        <TooltipExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{tooltipCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <TooltipExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {tooltipExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default TooltipPage;
