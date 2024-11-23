import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  carouselCode,
  CarouselExample,
  carouselExampleCode,
} from "@repo/react-ui";
import { Metadata } from "next";

const title = "Carousel";
const description = "A slideshow component for cycling through content.";

export const metadata: Metadata = {
  title,
  description,
};

const CarouselPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
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
