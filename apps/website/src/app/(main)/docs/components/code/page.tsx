import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { FrameworkTabList, FrameworkTabs, ReactTab, ReactTabContent, SolidTab, SolidTabContent } from "@/components/tabs/framework-tabs";
import { Code, reactCodeCode, CodeExample, reactCodeExampleCode } from "@repo/react-ui";
import { solidCodeCode } from "@repo/solid-ui";
import { Metadata } from "next";

const title = "Code";
const description = "A container for displaying formatted code snippets.";

export const metadata: Metadata = {
  title,
  description,
};

const CodePage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview defaultSize="md" sizes={["sm", "md", "lg"]}>
        <Code size="sm">@ark-ui/react</Code>
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">{reactCodeCode}</SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>
        <SyntaxHighlighter language="typescript">{solidCodeCode}</SyntaxHighlighter>

        </SolidTabContent>
      </FrameworkTabs>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <CodeExample />
      </ComponentPreview>


      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>

      <SyntaxHighlighter language="typescript">
        {reactCodeExampleCode}
      </SyntaxHighlighter>
        </ReactTabContent>

        <SolidTabContent>

        </SolidTabContent>
      </FrameworkTabs>
    </>
  );
};

export default CodePage;
