import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  hoverCardCode,
  HoverCardExample,
  hoverCardExampleCode,
} from "@repo/react-ui";

import { Metadata } from "next";

const title = "Hover Card";
const description = "A floating card that appears on element hover.";

export const metadata: Metadata = {
  title,
  description,
};

const HoverCardPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <HoverCardExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {hoverCardCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <HoverCardExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {hoverCardExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default HoverCardPage;
