"use client";
import { ComponentPreview } from "@/components/core/component-preview";
import {
  Select,
  SelectItem,
  SelectItemGroup,
  createListCollection,
} from "@repo/react-ui";

const SelectComponentPreview = () => {
  const items = ["React", "React native", "Angular", "Vue", "Svelte", "Solid"];

  const collection = createListCollection({ items });
  return (
    <ComponentPreview defaultSize="md" sizes={["xs", "sm", "md", "lg", "xl"]}>
      <Select collection={collection}>
        <SelectItemGroup>
          {collection.items.map((item) => (
            <SelectItem key={item} item={item} />
          ))}
        </SelectItemGroup>
      </Select>
    </ComponentPreview>
  );
};

export { SelectComponentPreview };
