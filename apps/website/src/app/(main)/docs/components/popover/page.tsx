import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  popoverCode,
  PopoverExample,
  popoverExampleCode,
} from "@repo/react-ui";
import { Metadata } from "next";

const title = "Popover";
const description = "A floating content container.";

export const metadata: Metadata = {
  title,
  description,
};

const PopoverPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <PopoverExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{popoverCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <PopoverExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {popoverExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default PopoverPage;
