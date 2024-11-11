export const collapsibleExampleCode = `import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../core/collapsible";
import { Button } from "../core/button";

export const CollapsibleExample = () => {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button>Collapsible</Button>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <div className="flex h-52 w-96 items-center justify-center rounded border border-blue-400 bg-blue-100 px-20 text-blue-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis,
          minima!
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
`