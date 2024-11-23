"use client";
import { Tabs as TabsPrimitives } from "@ark-ui/react";
import { atom, useAtom, useAtomValue } from "jotai";
import { PropsWithChildren, ReactNode, useRef, useState } from "react";
import { BlockSyntaxHighlighter } from "./block-syntax-highlighter";

const PREVIEW = "PREVIEW";
const CODE = "CODE";

const MOBILE_SIZE = {
  id: 2,
  width: 480,
  label: "Mobile",
};

const TABLET_SIZE = {
  id: 1,
  width: 640,
  label: "Tablet",
};

const LAPTOP_SIZE = {
  id: 3,
  width: 1024,
  label: "Laptop",
};

const DESKTOP_SIZE = {
  id: 4,
  width: 1366,
  label: "Desktop",
};

const SCREEN_SIZES = [MOBILE_SIZE, TABLET_SIZE, LAPTOP_SIZE, DESKTOP_SIZE];

const screenSizeAtom = atom(DESKTOP_SIZE);

interface TabProps {
  children: ReactNode;
  value: string;
}

const Tab = ({ value, children }: TabProps) => {
  return (
    <TabsPrimitives.Trigger
      value={value}
      className="text-base-800 rounded-[3px] px-2 py-1 leading-none"
    >
      <span className="relative z-10">{children}</span>
      <TabsPrimitives.Indicator className="bg-base-300 left-0 top-[--top] z-0 h-[--height] w-[--width] rounded-[3px]" />
    </TabsPrimitives.Trigger>
  );
};

const BlockPresentation = ({ children }: PropsWithChildren) => {
  return (
    <TabsPrimitives.Root defaultValue={PREVIEW}>
      <div className="flex justify-between">
        <TabsPrimitives.List className="bg-base-200 relative w-max space-x-1 rounded p-1">
          <Tab value={PREVIEW}>Preview</Tab>
          <Tab value={CODE}>Code</Tab>
        </TabsPrimitives.List>

        <ScreenSizeSelector />
      </div>
      <div className="pt-3">
        <div className="border-base-200 w-full overflow-hidden rounded border">
          {children}
        </div>
      </div>
    </TabsPrimitives.Root>
  );
};

const ScreenSizeSelector = () => {
  const [currentSize, setCurrentSize] = useAtom(screenSizeAtom);

  return (
    <div className="bg-base-200 relative h-max w-max space-x-1 rounded p-1">
      {SCREEN_SIZES.map((size) => (
        <button
          key={size.id}
          onClick={() => setCurrentSize(size)}
          className={`text-base-800 rounded-[3px] px-2 py-1 leading-none ${currentSize.id === size.id ? "bg-base-300" : ""}`}
        >
          {size.label}
        </button>
      ))}
    </div>
  );
};

interface BlockPreviewProps {
  children?: ReactNode;
  src?: string;
}

const BlockPreview = ({ children, src }: BlockPreviewProps) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const currentSize = useAtomValue(screenSizeAtom);

  const handleIframeLoad = () => {
    console.log("Aa");

    setIframeLoaded(true);
  };

  console.log(iframeLoaded);

  return (
    <TabsPrimitives.Content
      value={PREVIEW}
      className="h-max max-h-[90vh] w-full"
    >
      {src ? (
        <iframe
          // license="xxx"
          // ref={iframeRef}
          // height={"100%"}
          // className={`${theme}`}
          src={src}
          onLoad={handleIframeLoad}
          style={{
            maxWidth: "100%",
            width: currentSize.width,
            height: "88vh",
            maxHeight: "100%",
          }}
          // style={{ width: "100%",  }}
        />
      ) : (
        children
      )}
    </TabsPrimitives.Content>
  );
};

interface BlockCodeProps {
  children: string;
}

const BlockCode = ({ children }: BlockCodeProps) => {
  return (
    <TabsPrimitives.Content value={CODE}>
      <BlockSyntaxHighlighter language="typescript">
        {children}
      </BlockSyntaxHighlighter>
    </TabsPrimitives.Content>
  );
};

export { BlockCode, BlockPresentation, BlockPreview };
