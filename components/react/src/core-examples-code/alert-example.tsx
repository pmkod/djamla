export const alertExampleCode = `import { IconInfoCircle } from "@tabler/icons-react";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "../core/alert";

export const AlertExample = () => {
  return (
    <Alert>
      <AlertIcon>
        <IconInfoCircle size={20} />
      </AlertIcon>
      <AlertContent>
        <AlertTitle>Hello</AlertTitle>
        <AlertDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          cupiditate culpa, ex veniam impedit nobis aliquam officia error
          commodi atque?
        </AlertDescription>
      </AlertContent>
    </Alert>
  );
};
`