"use client";
import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  Select,
  selectCode,
  SelectExample,
  selectExampleCode,
  SelectItem,
  SelectItemGroup,
  createListCollection,
} from "@repo/react-ui";

const SelectPage = () => {
  const items = ["React", "React native", "Angular", "Vue", "Svelte", "Solid"];

  const collection = createListCollection({ items });
  return (
    <>
      <DocText>Select</DocText>
      <DocText level="paragraph">
        A customizable dropdown selection control.
      </DocText>
      <ComponentPreview defaultSize="md" sizes={["xs", "sm", "md", "lg", "xl"]}>
        <Select collection={collection}>
          <SelectItemGroup>
            {items.map((item) => (
              <SelectItem key={item} item={item} />
            ))}
          </SelectItemGroup>
        </Select>
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{selectCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <SelectExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {selectExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default SelectPage;
