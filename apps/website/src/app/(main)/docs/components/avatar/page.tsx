import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { FrameworkTabList, FrameworkTabs, ReactTab, ReactTabContent, SolidTab, SolidTabContent } from "@/components/tabs/framework-tabs";
import {
  Avatar,
  reactAvatarCode,
  AvatarExample,
  reactAvatarExampleCode,
  AvatarFallback,
  AvatarImage,
} from "@repo/react-ui";
import { solidAvatarCode } from "@repo/solid-ui";
import { Metadata } from "next";

const title = "Avatar";
const description = "A visual representation of a user or entity.";

export const metadata: Metadata = {
  title,
  description,
};

const AvatarPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview defaultSize="md" sizes={["xs", "sm", "md", "lg", "xl"]}>
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/300" />
          <AvatarFallback>AA</AvatarFallback>
        </Avatar>
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>

      <SyntaxHighlighter language="typescript">{reactAvatarCode}</SyntaxHighlighter>
        </ReactTabContent>

        <SolidTabContent>
        <SyntaxHighlighter language="typescript">{solidAvatarCode}</SyntaxHighlighter>

        </SolidTabContent>
      </FrameworkTabs>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <AvatarExample />
      </ComponentPreview>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>

      <SyntaxHighlighter language="typescript">
        {reactAvatarExampleCode}
      </SyntaxHighlighter>
        </ReactTabContent>

        <SolidTabContent>

        </SolidTabContent>
      </FrameworkTabs>
    </>
  );
};

export default AvatarPage;
