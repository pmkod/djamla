import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { FrameworkTabList, FrameworkTabs, ReactTab, SolidTab, ReactTabContent, SolidTabContent } from "@/components/tabs/framework-tabs";
import {
  reactPinInputCode,
  PinInputExample,
  reactPinInputExampleCode,
} from "@repo/react-ui";
import { solidPinInputCode } from "@repo/solid-ui";
import { Metadata } from "next";

const title = "Pin Input";
const description = "A segmented input for entering codes.";

export const metadata: Metadata = {
  title,
  description,
};

const PinInputPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <PinInputExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">
        {reactPinInputCode}
      </SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>
        <SyntaxHighlighter language="typescript">
        {solidPinInputCode}
      </SyntaxHighlighter>
        </SolidTabContent>
      </FrameworkTabs>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <PinInputExample />
      </ComponentPreview>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">
        {reactPinInputExampleCode}
      </SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>

        </SolidTabContent>
      </FrameworkTabs>
    </>
  );
};

export default PinInputPage;
