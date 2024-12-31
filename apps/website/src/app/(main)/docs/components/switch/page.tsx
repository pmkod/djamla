import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { FrameworkTabList, FrameworkTabs, ReactTab, ReactTabContent, SolidTab, SolidTabContent } from "@/components/tabs/framework-tabs";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  Switch,
  reactSwitchCode,
  SwitchExample,
  reactSwitchExampleCode,
} from "@repo/react-ui";

import { Metadata } from "next";
import { solidSwitchCode } from "@repo/solid-ui";

const title = "Siwtch";
const description = "A toggle control for binary states.";

export const metadata: Metadata = {
  title,
  description,
};

const SwitchPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview
        defaultColorScheme="primary"
        colorSchemes={["primary", "black"]}
        defaultSize="md"
        sizes={["sm", "md", "lg"]}
      >
        <Switch />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">{reactSwitchCode}</SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>
        <SyntaxHighlighter language="typescript">{solidSwitchCode}</SyntaxHighlighter>

        </SolidTabContent>
      </FrameworkTabs>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <SwitchExample />
      </ComponentPreview>


      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">
        {reactSwitchExampleCode}
      </SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>

        </SolidTabContent>
      </FrameworkTabs>
    </>
  );
};

export default SwitchPage;
