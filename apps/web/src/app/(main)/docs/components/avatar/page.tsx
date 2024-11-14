"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  Avatar,
  avatarCode,
  AvatarExample,
  avatarExampleCode,
  AvatarFallback,
  AvatarImage,
} from "@repo/react-ui";

const AvatarPage = () => {
  return (
    <>
      <DocText>Avatar</DocText>
      <DocText level="paragraph">
        A visual representation of a user or entity.
      </DocText>
      <ComponentPreview defaultSize="md" sizes={["xs", "sm", "md", "lg", "xl"]}>
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/300" />
          <AvatarFallback>AA</AvatarFallback>
        </Avatar>
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
