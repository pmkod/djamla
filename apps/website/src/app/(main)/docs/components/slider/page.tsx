import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  Slider,
  sliderCode,
  SliderExample,
  sliderExampleCode,
} from "@repo/react-ui";

import { Metadata } from "next";

const title = "Slider";
const description = "A control for selecting numeric values.";

export const metadata: Metadata = {
  title,
  description,
};

const SliderPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview
        defaultSize="md"
        sizes={["sm", "md", "lg", "xl"]}
        defaultOrientation="horizontal"
        orientations={["horizontal", "vertical"]}
      >
        <Slider />
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
