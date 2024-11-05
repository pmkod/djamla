import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../react/components/core/drawer";
import { Button } from "../../react/components/core/button";

const DrawerPage = () => {
  return (
    <div>
      <div className="p-20">
        <div className="flex gap-10 flex-wrap">
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

          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" colorScheme="black">
                Open right drawer
              </Button>
            </DrawerTrigger>
            <DrawerContent side="right">
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

          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" colorScheme="black">
                Open bottom drawer
              </Button>
            </DrawerTrigger>
            <DrawerContent side="bottom">
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

          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" colorScheme="black">
                Open top drawer
              </Button>
            </DrawerTrigger>
            <DrawerContent side="top">
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
        </div>
      </div>
    </div>
  );
};

export default DrawerPage;