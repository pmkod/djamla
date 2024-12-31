import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { FrameworkTabList, FrameworkTabs, ReactTab, ReactTabContent, SolidTab, SolidTabContent } from "@/components/tabs/framework-tabs";
import {
  IconButton,
  reactIconButtonCode,
  IconButtonExample,
  reactIconButtonExampleCode,
} from "@repo/react-ui";
import { solidIconButtonCode } from "@repo/solid-ui";
import { IconPlus } from "@tabler/icons-react";
import { Metadata } from "next";

const title = "Icon Button";
const description = "A button component represented by an icon.";

export const metadata: Metadata = {
  title,
  description,
};

const IconButtonPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview
        defaultVariant="solid"
        variants={["solid", "outline", "ghost"]}
        defaultColorScheme="primary"
        defaultSize="md"
        sizes={["xs", "sm", "md", "lg", "xl"]}
        colorSchemes={["primary", "red", "black"]}
        isLoading={false}
        fullWidth={false}
        disabled={false}
      >
        <IconButton>
          <IconPlus />
        </IconButton>
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">
        {reactIconButtonCode}
      </SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>
        <SyntaxHighlighter language="typescript">
        {solidIconButtonCode}
      </SyntaxHighlighter>
        </SolidTabContent>
      </FrameworkTabs>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <IconButtonExample />
      </ComponentPreview>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">
        {reactIconButtonExampleCode}
      </SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>

        </SolidTabContent>
      </FrameworkTabs>
    </>
  );
};

export default IconButtonPage;
