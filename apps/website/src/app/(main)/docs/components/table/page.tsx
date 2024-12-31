import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { FrameworkTabList, FrameworkTabs, ReactTab, ReactTabContent, SolidTab, SolidTabContent } from "@/components/tabs/framework-tabs";
import { reactTableCode, TableExample, reactTableExampleCode, SliderExample } from "@repo/react-ui";
import { solidTableCode } from "@repo/solid-ui";

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

      <FrameworkTabs>

<FrameworkTabList>
    <ReactTab />
    <SolidTab />
  </FrameworkTabList>
  <ReactTabContent>
  <SyntaxHighlighter language="typescript">{reactTableCode}</SyntaxHighlighter>

  </ReactTabContent>

  <SolidTabContent>
  <SyntaxHighlighter language="typescript">{solidTableCode}</SyntaxHighlighter>

  </SolidTabContent>
  </FrameworkTabs>





      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <TableExample />
      </ComponentPreview>
      <FrameworkTabs>
      
      <FrameworkTabList>
    <ReactTab />
    <SolidTab />
  </FrameworkTabList>
  <ReactTabContent>

  <SyntaxHighlighter language="typescript">
        {reactTableExampleCode}
      </SyntaxHighlighter>
  </ReactTabContent>

  <SolidTabContent>

  </SolidTabContent>


</FrameworkTabs>
    </>
  );
};

export default TablePage;
