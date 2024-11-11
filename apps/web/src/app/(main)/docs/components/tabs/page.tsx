"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { tabsCode, TabsExample, tabsExampleCode } from "@repo/react-ui";

const TabsPage = () => {
  return (
    <>
      <DocText>Tabs</DocText>
      <DocText level="paragraph">
        A set of panels with tabbed navigation.
      </DocText>
      <ComponentPreview>
        <TabsExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{tabsCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <TabsExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {tabsExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default TabsPage;
