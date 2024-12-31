import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { FrameworkTabList, FrameworkTabs, ReactTab, ReactTabContent, SolidTab, SolidTabContent } from "@/components/tabs/framework-tabs";
import {
  Kbd,
  reactKbdCode,
  KbdExample,
  reactKbdExampleCode,
  KbdGroup,
  KbdSeparator,
} from "@repo/react-ui";
import { solidKbdCode } from "@repo/solid-ui";
import { Metadata } from "next";

const title = "Kbd";
const description = "A visual element representing keyboard input.";

export const metadata: Metadata = {
  title,
  description,
};

const KbdPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <div className="flex flex-col items-center space-y-8">
          <KbdGroup>
            <Kbd size="sm">Ctrl</Kbd>
            <KbdSeparator>+</KbdSeparator>
            <Kbd size="sm">Shift</Kbd>
            <KbdSeparator>+</KbdSeparator>
            <Kbd size="sm">V</Kbd>
          </KbdGroup>

          <KbdGroup>
            <Kbd size="md">Ctrl</Kbd>
            <KbdSeparator>+</KbdSeparator>
            <Kbd size="md">Shift</Kbd>
            <KbdSeparator>+</KbdSeparator>
            <Kbd size="md">V</Kbd>
          </KbdGroup>

          <KbdGroup>
            <Kbd size="lg">Ctrl</Kbd>
            <KbdSeparator>+</KbdSeparator>
            <Kbd size="lg">Shift</Kbd>
            <KbdSeparator>+</KbdSeparator>
            <Kbd size="lg">V</Kbd>
          </KbdGroup>
        </div>
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">{reactKbdCode}</SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>
        <SyntaxHighlighter language="typescript">{solidKbdCode}</SyntaxHighlighter>

        </SolidTabContent>
      </FrameworkTabs>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <KbdExample />
      </ComponentPreview>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">
        {reactKbdExampleCode}
      </SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>

        </SolidTabContent>
      </FrameworkTabs>
    </>
  );
};

export default KbdPage;
