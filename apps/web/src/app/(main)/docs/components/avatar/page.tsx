"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { avatarCode, AvatarExample, avatarExampleCode } from "@repo/react-ui";

const AvatarPage = () => {
  return (
    <>
      <DocText>Avatar</DocText>
      <DocText level="paragraph">
        A visual representation of a user or entity.
      </DocText>
      <ComponentPreview>
        <AvatarExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{avatarCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <AvatarExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {avatarExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default AvatarPage;
