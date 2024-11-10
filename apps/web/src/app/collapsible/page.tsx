import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../react/components/core/collapsible";
import { Button } from "../../../../../components/react/src/core/button";

const CollapsiblePage = () => {
  return (
    <div>
      <div className="p-20">
        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button>Collapsible</Button>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <div className="flex h-52 w-96 items-center justify-center rounded border border-blue-400 bg-blue-100 px-20 text-blue-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis, minima!
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default CollapsiblePage;
