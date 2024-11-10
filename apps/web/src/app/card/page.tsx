import React from "react";
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../react/components/core/card";
import { Button } from "../../../../../components/react/src/core/button";

const CardPage = () => {
  return (
    <div>
      <div className="flex gap-20 p-10">
        <div className="w-96">
          <Card>
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardBody>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                dolor perferendis omnis odio odit mollitia voluptas libero iste
                voluptatibus dignissimos. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Architecto placeat reprehenderit
                ut consequuntur laudantium! Lorem ipsum dolor sit amet,
              </div>
            </CardBody>
            <CardFooter className="flex justify-between">
              <Button variant="outline" fullWidth>
                Cancel
              </Button>
              <Button fullWidth>Deploy</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
