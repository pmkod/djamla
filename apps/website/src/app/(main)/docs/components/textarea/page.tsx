import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { FrameworkTabList, FrameworkTabs, ReactTab, ReactTabContent, SolidTab, SolidTabContent } from "@/components/tabs/framework-tabs";

import {
  Textarea,
  reactTextareaCode,
  TextareaExample,
  reactTextareaExampleCode,
} from "@repo/react-ui";
import { solidTextareaCode } from "@repo/solid-ui";
import { Metadata } from "next";

const title = "Textarea";
const description = "A multiline text input field.";

export const metadata: Metadata = {
  title,
  description,
};

const TextareaPage = () => {
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
        <Textarea placeholder="Type here" />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">
        {reactTextareaCode}
      </SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>

        <SyntaxHighlighter language="typescript">
        {solidTextareaCode}
      </SyntaxHighlighter>
        </SolidTabContent>
      </FrameworkTabs>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <TextareaExample />
      </ComponentPreview>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">
        {reactTextareaExampleCode}
      </SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>

        </SolidTabContent>
      </FrameworkTabs>
    </>
  );
};

export default TextareaPage;
