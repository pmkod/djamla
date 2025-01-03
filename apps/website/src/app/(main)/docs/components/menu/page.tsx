import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { FrameworkTabList, FrameworkTabs, ReactTab, ReactTabContent, SolidTab, SolidTabContent } from "@/components/tabs/framework-tabs";
import { reactMenuCode, MenuExample, reactMenuExampleCode } from "@repo/react-ui";
import { solidMenuCode } from "@repo/solid-ui";
import { Metadata } from "next";

const title = "Menu";
const description = "A list of interactive options.";

export const metadata: Metadata = {
  title,
  description,
};

const MenuPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <MenuExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">{reactMenuCode}</SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>
        <SyntaxHighlighter language="typescript">{solidMenuCode}</SyntaxHighlighter>

        </SolidTabContent>
      </FrameworkTabs>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <MenuExample />
      </ComponentPreview>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">
        {reactMenuExampleCode}
      </SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>

        </SolidTabContent>
      </FrameworkTabs>
    </>
  );
};

export default MenuPage;
