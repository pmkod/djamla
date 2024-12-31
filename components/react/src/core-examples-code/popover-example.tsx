export const popoverExampleCode = `import { Button } from "../core/button";
import {
  Popover,
  PopoverCloseButton,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "../core/popover";

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