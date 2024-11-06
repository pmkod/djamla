import React from "react";
import { Toggle } from "../../react/components/core/toggle";

const TogglePage = () => {
  return (
    <div>
      <div className="p-20">
        <Toggle value="c" size="xl" variant="outline">
          C
        </Toggle>
      </div>
    </div>
  );
};

export default TogglePage;
