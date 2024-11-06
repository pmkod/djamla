import React from "react";
import { Toggle, ToggleGroup } from "../../react/components/core/toggle";

const TogglePage = () => {
  return (
    <div>
      <div className="p-20">
        <ToggleGroup multiple>
          <Toggle value="a" size="xl" variant="outline">
            A
          </Toggle>
          <Toggle value="b" size="xl" variant="outline">
            B
          </Toggle>
          <Toggle value="c" size="xl" variant="outline">
            C
          </Toggle>
        </ToggleGroup>
      </div>
    </div>
  );
};

export default TogglePage;
