"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { menuCode, MenuExample, menuExampleCode } from "@repo/react-ui";

const MenuPage = () => {
  return (
    <>
      <DocText>Menu</DocText>
      <DocText level="paragraph">A list of interactive options.</DocText>
      <ComponentPreview>
        <MenuExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{menuCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <MenuExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {menuExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default MenuPage;
