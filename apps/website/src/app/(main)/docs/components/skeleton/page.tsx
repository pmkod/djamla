import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { FrameworkTabList, FrameworkTabs, ReactTab, ReactTabContent, SolidTab, SolidTabContent } from "@/components/tabs/framework-tabs";
import {
  reactSkeletonCode,
  SkeletonExample,
  reactSkeletonExampleCode,
} from "@repo/react-ui";
import { solidSkeletonCode } from "@repo/solid-ui";

import { Metadata } from "next";

const title = "Skeleton";
const description = "A placeholder for loading content.";

export const metadata: Metadata = {
  title,
  description,
};

const SkeletonPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <SkeletonExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">
        {reactSkeletonCode}
      </SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>

        <SyntaxHighlighter language="typescript">
        {solidSkeletonCode}
      </SyntaxHighlighter>
        </SolidTabContent>
      </FrameworkTabs>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <SkeletonExample />
      </ComponentPreview>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>

      <SyntaxHighlighter language="typescript">
        {reactSkeletonExampleCode}
      </SyntaxHighlighter>
        </ReactTabContent>

        <SolidTabContent>

        </SolidTabContent>
      </FrameworkTabs>
    </>
  );
};

export default SkeletonPage;
