import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  Input,
  inputCode,
  InputExample,
  inputExampleCode,
} from "@repo/react-ui";
import { Metadata } from "next";

const title = "Input";
const description = "A field for accepting user text input.";

export const metadata: Metadata = {
  title,
  description,
};

const InputPage = () => {
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
        <Input placeholder="Type here" />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{inputCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <InputExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {inputExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default InputPage;
