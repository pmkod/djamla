import React from "react";
import { Checkbox } from "../../react/components/core/checkbox";

const CheckboxPage = () => {
  return (
    <div>
      <Checkbox size="sm" />
      <div className="flex items-start gap-x-8">
        <Checkbox size="sm" />
        <Checkbox size="md" />
        <Checkbox size="md" />
        <Checkbox size="md" />
        <Checkbox size="md" />
        <Checkbox size="lg" />
        <Checkbox size="sm" />
      </div>
    </div>
  );
};

export default CheckboxPage;
