"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  carouselCode,
  CarouselExample,
  carouselExampleCode,
} from "@repo/react-ui";

const CarouselPage = () => {
  return (
    <>
      <DocText>Carousel</DocText>
      <DocText level="paragraph">
        A slideshow component for cycling through content.
      </DocText>
      <ComponentPreview>
        <CarouselExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {carouselCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <CarouselExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {carouselExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default CarouselPage;
