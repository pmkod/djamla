"use client";
import { useDidUpdate, useElementSize, useTimeout } from "@mantine/hooks";
import { IconCheck, IconClipboard } from "@tabler/icons-react";
import { useState } from "react";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface BlockSyntaxHighlighterProps {
  children: string;
  language?: "typescript" | "css";
}

const BlockSyntaxHighlighter = ({
  children,
  language,
}: BlockSyntaxHighlighterProps) => {
  const { ref, height } = useElementSize();
  const maxHeight = 500;
  const [copied, setCopied] = useState(false);

  const { start } = useTimeout(() => {
    console.log("Aa");
    setCopied(false);
  }, 1000);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
    } catch (error) {
      console.log(error);
    }
  };

  useDidUpdate(() => {
    if (copied === true) {
      start();
    }

    return () => {};
  }, [copied]);

  return (
    <div className="relative overflow-auto" ref={ref}>
      <ReactSyntaxHighlighter
        language={language}
        style={androidstudio}
        wrapLongLines={true}
        customStyle={{
          borderRadius: 4,
          fontSize: 14,
          padding: 20,
          width: "100%",
          maxHeight,
          maxWidth: "100%",

          margin: 0,
          wordBreak: "break-all",
          whiteSpace: "pre-wrap",
          minWidth: 200,
        }}
      >
        {children}
      </ReactSyntaxHighlighter>
      <div
        className="absolute top-2.5"
        style={{
          right: height >= maxHeight ? 30 : 10,
        }}
      >
        <button
          onClick={copyCode}
          className="rounded border border-neutral-600 p-1.5 transition-colors hover:bg-neutral-700"
        >
          {copied ? (
            <IconCheck size={18} className="text-neutral-300" />
          ) : (
            <IconClipboard size={18} className="text-neutral-300" />
          )}
        </button>
      </div>
    </div>
  );
};

export { BlockSyntaxHighlighter };
