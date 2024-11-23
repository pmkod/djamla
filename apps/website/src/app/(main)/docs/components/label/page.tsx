import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { labelCode, LabelExample, labelExampleCode } from "@repo/react-ui";
import { Metadata } from "next";

const title = "Label";
const description = "A caption for interface elements.";

export const metadata: Metadata = {
  title,
  description,
};

const LabelPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <LabelExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{labelCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <LabelExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {labelExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default LabelPage;
