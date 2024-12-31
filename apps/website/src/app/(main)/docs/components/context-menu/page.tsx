import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { FrameworkTabList, FrameworkTabs, ReactTab, ReactTabContent, SolidTab, SolidTabContent } from "@/components/tabs/framework-tabs";
import {
  reactContextMenuCode,
  ContextMenuExample,
  reactContextMenuExampleCode,
} from "@repo/react-ui";
import { solidContextMenuCode } from "@repo/solid-ui";
import { Metadata } from "next";

const title = "Context Menu";
const description = "A floating menu triggered by right-click interaction.";

export const metadata: Metadata = {
  title,
  description,
};

const ContextMenuPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <ContextMenuExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>

      <SyntaxHighlighter language="typescript">
        {reactContextMenuCode}
      </SyntaxHighlighter>
        </ReactTabContent>

        <SolidTabContent>

        <SyntaxHighlighter language="typescript">
        {solidContextMenuCode}
      </SyntaxHighlighter>
        </SolidTabContent>
      </FrameworkTabs>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <ContextMenuExample />
      </ComponentPreview>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>

      <SyntaxHighlighter language="typescript">
        {reactContextMenuExampleCode}
      </SyntaxHighlighter>
        </ReactTabContent>

        <SolidTabContent>

        </SolidTabContent>
      </FrameworkTabs>
    </>
  );
};

export default ContextMenuPage;
