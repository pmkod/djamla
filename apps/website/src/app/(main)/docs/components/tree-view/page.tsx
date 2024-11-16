import React from "react";
import { Metadata } from "next";

const title = "Tree View";
const description = "A temporary notification message.";

export const metadata: Metadata = {
  title,
  description,
};

const TreeViewPage = () => {
  return (
    <>
      To do
      {/* <DocText></DocText>
      <DocText level="paragraph"></DocText>
      <ComponentPreview>
        <TreeViewExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {treeViewCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <TreeViewExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {treeViewExampleCode}
      </SyntaxHighlighter> */}
    </>
  );
};

export default TreeViewPage;
