import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  RadioGroup,
  radioGroupCode,
  RadioGroupExample,
  radioGroupExampleCode,
  RadioGroupItem,
} from "@repo/react-ui";

import { Metadata } from "next";

const title = "Radio Group";
const description = "A set of mutually exclusive options.";

export const metadata: Metadata = {
  title,
  description,
};

const RadioGroupPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview defaultSize="md">
        <RadioGroup orientation="horizontal">
          <RadioGroupItem value="a" size="sm">
            React
          </RadioGroupItem>
          <RadioGroupItem value="b" size="md">
            Solid
          </RadioGroupItem>
          <RadioGroupItem value="c" size="lg">
            Vue
          </RadioGroupItem>
          <RadioGroupItem value="d" size="xl">
            Svelte
          </RadioGroupItem>
        </RadioGroup>
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {radioGroupCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <RadioGroupExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {radioGroupExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default RadioGroupPage;
