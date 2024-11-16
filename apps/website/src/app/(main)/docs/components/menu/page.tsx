import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { menuCode, MenuExample, menuExampleCode } from "@repo/react-ui";
import { Metadata } from "next";

const title = "Menu";
const description = "A list of interactive options.";

export const metadata: Metadata = {
  title,
  description,
};

const MenuPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
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
