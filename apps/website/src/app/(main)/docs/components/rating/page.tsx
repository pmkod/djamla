import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { FrameworkTabList, FrameworkTabs, ReactTab, ReactTabContent, SolidTab, SolidTabContent } from "@/components/tabs/framework-tabs";
import { reactRatingCode, RatingExample, reactRatingExampleCode } from "@repo/react-ui";
import { solidRatingCode } from "@repo/solid-ui";

import { Metadata } from "next";

const title = "Rating";
const description = "An interactive score display system.";

export const metadata: Metadata = {
  title,
  description,
};

const RatingPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <RatingExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">{reactRatingCode}</SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>
        <SyntaxHighlighter language="typescript">{solidRatingCode}</SyntaxHighlighter>

        </SolidTabContent>
      </FrameworkTabs>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <RatingExample />
      </ComponentPreview>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">
        {reactRatingExampleCode}
      </SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>

        </SolidTabContent>
      </FrameworkTabs>
    </>
  );
};

export default RatingPage;
