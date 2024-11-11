export const popoverExampleCode = `import {
  Popover,
  PopoverCloseButton,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "../core/popover";
import { Button } from "../core/button";

export const PopoverExample = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Title</PopoverTitle>
          <PopoverCloseButton />
        </PopoverHeader>
        <PopoverDescription>Description</PopoverDescription>
      </PopoverContent>
    </Popover>
  );
};
`