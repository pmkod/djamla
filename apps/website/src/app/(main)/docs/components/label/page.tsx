import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { FrameworkTabList, FrameworkTabs, ReactTab, ReactTabContent, SolidTab, SolidTabContent } from "@/components/tabs/framework-tabs";
import { reactLabelCode, LabelExample, reactLabelExampleCode } from "@repo/react-ui";
import { solidLabelCode } from "@repo/solid-ui";
import { Metadata } from "next";

const title = "Label";
const description = "A caption for interface elements.";

export const metadata: Metadata = {
  title,
  description,
};

const LabelPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <LabelExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">{reactLabelCode}</SyntaxHighlighter>

        </ReactTabContent>

      <SyntaxHighlighter language="typescript">{solidLabelCode}</SyntaxHighlighter>
      <SolidTabContent>

        </SolidTabContent>
      </FrameworkTabs>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <LabelExample />
      </ComponentPreview>


      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>

      <SyntaxHighlighter language="typescript">
        {reactLabelExampleCode}
      </SyntaxHighlighter>
        </ReactTabContent>

        <SolidTabContent>

        </SolidTabContent>
      </FrameworkTabs>
    </>
  );
};

export default LabelPage;
