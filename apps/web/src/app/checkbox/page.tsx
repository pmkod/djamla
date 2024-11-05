import React from "react";
import { Checkbox } from "../../react/components/core/checkbox";

const CheckboxPage = () => {
  return (
    <div>
      <div className="flex gap-x-8 p-4">
        <Checkbox size="sm" />
        <Checkbox size="md" />
        <Checkbox size="lg" />
      </div>
    </div>
  );
};

export default CheckboxPage;
