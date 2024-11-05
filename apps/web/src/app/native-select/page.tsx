import React from "react";
import { NativeSelect } from "../../react/components/core/native-select";

const NativeSelectPage = () => {
  return (
    <div>
      <div className="p-20">
        <div className="max-w-96 flex flex-col gap-20">
          <NativeSelect size="sm">
            <option value="1">Item 1</option>
            <option value="2">Item 2</option>
            <option value="3">Item 3</option>
            <option value="4">Item 4</option>
          </NativeSelect>

          <NativeSelect size="md">
            <option value="1">Item 1</option>
            <option value="2">Item 2</option>
            <option value="3">Item 3</option>
            <option value="4">Item 4</option>
          </NativeSelect>

          <NativeSelect size="lg">
            <option value="1">Item 1</option>
            <option value="2">Item 2</option>
            <option value="3">Item 3</option>
            <option value="4">Item 4</option>
          </NativeSelect>
        </div>
      </div>
    </div>
  );
};

export default NativeSelectPage;
