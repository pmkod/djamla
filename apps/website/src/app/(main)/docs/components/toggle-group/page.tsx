"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  ToggleGroup,
  toggleGroupCode,
  ToggleGroupExample,
  toggleGroupExampleCode,
  ToggleItem,
} from "@repo/react-ui";
import { IconPlus } from "@tabler/icons-react";

const ToggleGroupPage = () => {
  return (
    <>
      <DocText>Toggle Group</DocText>
      <DocText level="paragraph">A set of connected toggle controls.</DocText>
      <ComponentPreview>
        <div className="flex gap-x-20">
          <ToggleGroup orientation="horizontal" variant="outline" size="sm">
            <ToggleItem value="a">
              <IconPlus />
            </ToggleItem>
          </ToggleGroup>
          <ToggleGroup orientation="horizontal" variant="outline" size="md">
            <ToggleItem value="a">
              <IconPlus size={18} />
            </ToggleItem>
            <ToggleItem value="b">
              <IconPlus size={18} />
            </ToggleItem>
            <ToggleItem value="c">
              <IconPlus size={18} />
            </ToggleItem>
          </ToggleGroup>

          <ToggleGroup
            multiple
            orientation="vertical"
            variant="plain"
            size="xl"
          >
            <ToggleItem value="a">
              <IconPlus />
            </ToggleItem>
            <ToggleItem value="b">
              <IconPlus />
            </ToggleItem>
            <ToggleItem value="c">
              <IconPlus />
            </ToggleItem>
          </ToggleGroup>
        </div>
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {toggleGroupCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <ToggleGroupExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {toggleGroupExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default ToggleGroupPage;
