import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../react/components/core/tooltip";
import { Button } from "../../../../../components/react/src/core/button";

const TooltipPage = () => {
  return (
    <div>
      <div className="p-8 flex gap-20">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover to see</Button>
          </TooltipTrigger>
          <TooltipContent>Lorem ipsum</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};

export default TooltipPage;
