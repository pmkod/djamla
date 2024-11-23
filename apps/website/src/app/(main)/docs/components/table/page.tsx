import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { tableCode, TableExample, tableExampleCode } from "@repo/react-ui";

import { Metadata } from "next";

const title = "Table";
const description = "A grid for displaying structured data.";

export const metadata: Metadata = {
  title,
  description,
};

const TablePage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <TableExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{tableCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <TableExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {tableExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default TablePage;
