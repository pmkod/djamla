export const cardExampleCode = `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
  CardFooter,
} from "../core/card";
import { Button } from "../core/button";

export const CardExample = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardBody>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolor
          perferendis omnis odio odit mollitia voluptas libero iste voluptatibus
          dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Architecto placeat reprehenderit ut consequuntur laudantium! Lorem
          ipsum dolor sit amet,
        </div>
      </CardBody>
      <CardFooter className="flex justify-between">
        <Button variant="outline" fullWidth>
          Cancel
        </Button>
        <Button fullWidth>Deploy</Button>
      </CardFooter>
    </Card>
  );
};
`