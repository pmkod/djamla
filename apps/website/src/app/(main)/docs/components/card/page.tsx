import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { cardCode, CardExample, cardExampleCode } from "@repo/react-ui";
import { Metadata } from "next";

const title = "Card";
const description = "A container for organizing related content.";

export const metadata: Metadata = {
  title,
  description,
};

const CardPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <CardExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{cardCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <CardExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {cardExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default CardPage;
