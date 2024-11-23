import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  Badge,
  badgeCode,
  BadgeExample,
  badgeExampleCode,
} from "@repo/react-ui";
import { Metadata } from "next";

const title = "Badge";
const description = "A small indicator for status or labels.";

export const metadata: Metadata = {
  title,
  description,
};

const BadgePage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview
        defaultVariant="solid"
        variants={["solid", "outline", "soft", "plain"]}
        defaultSize="md"
        sizes={["sm", "md", "lg"]}
        defaultColorScheme="primary"
        colorSchemes={["primary", "black", "red"]}
      >
        <Badge>Hello</Badge>
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{badgeCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <BadgeExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {badgeExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default BadgePage;
