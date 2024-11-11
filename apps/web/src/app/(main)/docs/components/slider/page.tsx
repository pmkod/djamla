"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { sliderCode, SliderExample, sliderExampleCode } from "@repo/react-ui";

const SliderPage = () => {
  return (
    <>
      <DocText>Slider</DocText>
      <DocText level="paragraph">
        A control for selecting numeric values.
      </DocText>
      <ComponentPreview>
        <SliderExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{sliderCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <SliderExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {sliderExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default SliderPage;
