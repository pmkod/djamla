import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { FrameworkTabList, FrameworkTabs, ReactTab, ReactTabContent, SolidTab, SolidTabContent } from "@/components/tabs/framework-tabs";
import {
  NativeSelect,
  reactNativeSelectCode,
  NativeSelectExample,
  reactNativeSelectExampleCode,
} from "@repo/react-ui";
import { solidNativeSelectCode } from "@repo/solid-ui";
import { Metadata } from "next";

const title = "Native Select";
const description = "A platform-native dropdown selection control.";

export const metadata: Metadata = {
  title,
  description,
};

const NativeSelectPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview
        defaultVariant="outline"
        variants={["outline", "soft", "plain"]}
        defaultSize="md"
        sizes={["sm", "md", "lg"]}
      >
        <NativeSelect size="lg">
          <option value="1">Item 1</option>
          <option value="2">Item 2</option>
          <option value="3">Item 3</option>
          <option value="4">Item 4</option>
        </NativeSelect>
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">
        {reactNativeSelectCode}
      </SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>

        <SyntaxHighlighter language="typescript">
        {solidNativeSelectCode}
      </SyntaxHighlighter>
        </SolidTabContent>
      </FrameworkTabs>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <NativeSelectExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {reactNativeSelectExampleCode}
      </SyntaxHighlighter>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>

        </ReactTabContent>

        <SolidTabContent>

        </SolidTabContent>
      </FrameworkTabs>
    </>
  );
};

export default NativeSelectPage;
