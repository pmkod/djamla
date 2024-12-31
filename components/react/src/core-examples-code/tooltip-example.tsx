export const tooltipExampleCode = `import { Button } from "../core/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../core/tooltip";

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