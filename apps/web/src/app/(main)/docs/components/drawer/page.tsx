"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { drawerCode, DrawerExample, drawerExampleCode } from "@repo/react-ui";

const DrawerPage = () => {
  return (
    <>
      <DocText>Drawer</DocText>
      <DocText level="paragraph">
        A sliding panel that emerges from screen edges.
      </DocText>
      <ComponentPreview>
        <DrawerExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{drawerCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <DrawerExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {drawerExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default DrawerPage;
