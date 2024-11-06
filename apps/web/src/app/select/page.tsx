"use client";
import React from "react";
import {
  Select,
  SelectItem,
  SelectItemGroup,
} from "../../react/components/core/select";
import { createListCollection } from "@ark-ui/react";

const SelectPage = () => {
  const items = ["React", "React native", "Angular", "Vue", "Svelte", "Solid"];

  const collection = createListCollection({ items });

  return (
    <div>
      <div className="p-20">
        <div className="w-96">
          <Select size="md" collection={collection}>
            <SelectItemGroup>
              {items.map((item) => (
                <SelectItem key={item} item={item} />
              ))}
            </SelectItemGroup>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SelectPage;
