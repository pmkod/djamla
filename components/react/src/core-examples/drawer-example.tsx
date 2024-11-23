import { Button } from "../core/button";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../core/drawer";

export const DrawerExample = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" colorScheme="black">
          Open left drawer
        </Button>
      </DrawerTrigger>
      <DrawerContent side="left">
        <DrawerHeader>
          <DrawerTitle>Title</DrawerTitle>
          <DrawerCloseButton />
        </DrawerHeader>

        <DrawerBody>
          <div className="h-screen">A</div>
          <div className="h-screen">B</div>
          <div className="h-screen">C</div>
          <div className="h-screen">D</div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
