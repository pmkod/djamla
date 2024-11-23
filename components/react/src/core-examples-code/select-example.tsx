export const selectExampleCode = `"use client";
import { Select, SelectItem, SelectItemGroup } from "../core/select";
import { createListCollection } from "@ark-ui/react";

export const SelectExample = () => {
  const items = ["React", "React native", "Angular", "Vue", "Svelte", "Solid"];

  const collection = createListCollection({ items });
  return (
    <Select size="md" collection={collection}>
      <SelectItemGroup>
        {items.map((item) => (
          <SelectItem key={item} item={item} />
        ))}
      </SelectItemGroup>
    </Select>
  );
};
`;
