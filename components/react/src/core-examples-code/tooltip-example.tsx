export const tooltipExampleCode = `import { Tooltip, TooltipContent, TooltipTrigger } from "../core/tooltip";
import { Button } from "../core/button";

export const TooltipExample = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover to see</Button>
      </TooltipTrigger>
      <TooltipContent>Lorem ipsum</TooltipContent>
    </Tooltip>
  );
};
`