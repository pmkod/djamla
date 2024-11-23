import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  pinInputCode,
  PinInputExample,
  pinInputExampleCode,
} from "@repo/react-ui";
import { Metadata } from "next";

const title = "Pin Input";
const description = "A segmented input for entering codes.";

export const metadata: Metadata = {
  title,
  description,
};

const PinInputPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <PinInputExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {pinInputCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <PinInputExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {pinInputExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default PinInputPage;
