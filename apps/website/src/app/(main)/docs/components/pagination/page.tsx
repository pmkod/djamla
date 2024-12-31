import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { FrameworkTabList, FrameworkTabs, ReactTab, ReactTabContent, SolidTab, SolidTabContent } from "@/components/tabs/framework-tabs";
import {
  reactPaginationCode,
  PaginationExample,
  reactPaginationExampleCode,
} from "@repo/react-ui";
import { solidPaginationCode } from "@repo/solid-ui";
import { Metadata } from "next";

const title = "Pagination";
const description = "A control for navigating through pages.";

export const metadata: Metadata = {
  title,
  description,
};

const PaginationPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <PaginationExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">
        {reactPaginationCode}
      </SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>
        <SyntaxHighlighter language="typescript">
        {solidPaginationCode}
      </SyntaxHighlighter>
        </SolidTabContent>
      </FrameworkTabs>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <PaginationExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {reactPaginationExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default PaginationPage;
