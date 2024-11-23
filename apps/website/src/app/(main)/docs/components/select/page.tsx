import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { selectCode, SelectExample, selectExampleCode } from "@repo/react-ui";

import { ComponentPreview } from "@/components/core/component-preview";
import { Metadata } from "next";
import { SelectComponentPreview } from "./_select-component-preview";
// import { SelectComponentPreview } from "./_select-component-preview";

const title = "Select";
const description = "A customizable dropdown selection control.";

export const metadata: Metadata = {
  title,
  description,
};

const SelectPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <SelectComponentPreview />
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{selectCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <SelectExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {selectExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default SelectPage;
