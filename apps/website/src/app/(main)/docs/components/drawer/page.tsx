import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  drawerCode,
  DrawerContent,
  DrawerExample,
  drawerExampleCode,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@repo/react-ui";
import { Metadata } from "next";

const title = "Drawer";
const description = "A sliding panel that emerges from screen edges.";

export const metadata: Metadata = {
  title,
  description,
};

const DrawerPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <div className="grid grid-cols-2 gap-2">
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
        </div>
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{drawerCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <DrawerExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {drawerExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default DrawerPage;
