import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  linearProgressCode,
  LinearProgressExample,
  linearProgressExampleCode,
} from "@repo/react-ui";
import { Metadata } from "next";

const title = "Linear Progress";
const description = "A bar indicating process completion status.";

export const metadata: Metadata = {
  title,
  description,
};

const LinearProgressPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <LinearProgressExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {linearProgressCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <LinearProgressExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {linearProgressExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default LinearProgressPage;
