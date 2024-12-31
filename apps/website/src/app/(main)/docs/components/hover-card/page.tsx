import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { FrameworkTabList, FrameworkTabs, ReactTab, ReactTabContent, SolidTab, SolidTabContent } from "@/components/tabs/framework-tabs";
import {
  reactHoverCardCode,
  HoverCardExample,
  reactHoverCardExampleCode,
} from "@repo/react-ui";
import { solidHoverCardCode } from "@repo/solid-ui";

import { Metadata } from "next";

const title = "Hover Card";
const description = "A floating card that appears on element hover.";

export const metadata: Metadata = {
  title,
  description,
};

const HoverCardPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <HoverCardExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">
        {reactHoverCardCode}
      </SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>

        <SyntaxHighlighter language="typescript">
        {solidHoverCardCode}
      </SyntaxHighlighter>
        </SolidTabContent>
      </FrameworkTabs>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <HoverCardExample />
      </ComponentPreview>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">
        {reactHoverCardExampleCode}
      </SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>

        </SolidTabContent>
      </FrameworkTabs>
    </>
  );
};

export default HoverCardPage;
