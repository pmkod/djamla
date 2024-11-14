"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  RadioGroup,
  radioGroupCode,
  RadioGroupExample,
  radioGroupExampleCode,
  RadioGroupItem,
} from "@repo/react-ui";

const RadioGroupPage = () => {
  return (
    <>
      <DocText>Radio Group</DocText>
      <DocText level="paragraph">A set of mutually exclusive options.</DocText>
      <ComponentPreview defaultSize="md">
        <RadioGroup orientation="horizontal">
          <RadioGroupItem value="a" size="sm">
            React
          </RadioGroupItem>
          <RadioGroupItem value="b" size="md">
            Solid
          </RadioGroupItem>
          <RadioGroupItem value="c" size="lg">
            Vue
          </RadioGroupItem>
          <RadioGroupItem value="d" size="xl">
            Svelte
          </RadioGroupItem>
        </RadioGroup>
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {radioGroupCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <RadioGroupExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {radioGroupExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default RadioGroupPage;
