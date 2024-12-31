import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { FrameworkTabList, FrameworkTabs, ReactTab, ReactTabContent, SolidTab, SolidTabContent } from "@/components/tabs/framework-tabs";
import {
  reactCarouselCode,
  CarouselExample,
  reactCarouselExampleCode,
} from "@repo/react-ui";
import { solidCarouselCode } from "@repo/solid-ui";
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

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">
        {reactCarouselCode}
      </SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>

        <SyntaxHighlighter language="typescript">
        {solidCarouselCode}
      </SyntaxHighlighter>

        </SolidTabContent>
      </FrameworkTabs>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <CarouselExample />
      </ComponentPreview>


      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">
        {reactCarouselExampleCode}
      </SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>

        </SolidTabContent>
      </FrameworkTabs>
    </>
  );
};

export default CarouselPage;
