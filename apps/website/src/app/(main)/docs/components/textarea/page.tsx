import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  Textarea,
  textareaCode,
  TextareaExample,
  textareaExampleCode,
} from "@repo/react-ui";
import { Metadata } from "next";

const title = "Textarea";
const description = "A multiline text input field.";

export const metadata: Metadata = {
  title,
  description,
};

const TextareaPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview
        defaultVariant="outline"
        variants={["outline", "soft", "plain"]}
        defaultSize="md"
        sizes={["sm", "md", "lg"]}
      >
        <Textarea placeholder="Type here" />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {textareaCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <TextareaExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {textareaExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default TextareaPage;
