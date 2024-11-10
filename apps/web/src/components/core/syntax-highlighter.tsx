import { IconCheck, IconClipboard } from "@tabler/icons-react";
import { useDidUpdate, useElementSize, useTimeout } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface SyntaxHighlighterProps {
  children: string;
  language: "typescript";
}

const SyntaxHighlighter = ({ children, language }: SyntaxHighlighterProps) => {
  const { ref, height } = useElementSize();
  const maxHeight = 400;
  const [copied, setCopied] = useState(false);

  const { start, clear } = useTimeout(() => {
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
    <div className="relative mb-14 overflow-auto" ref={ref}>
      <ReactSyntaxHighlighter
        language={language}
        style={androidstudio}
        wrapLongLines={true}
        customStyle={{
          borderRadius: 4,
          fontSize: 14,
          padding: 20,
          width: "100%",
          flex: 1,
          maxHeight,
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
          className="p-1.5 rounded border border-neutral-600 hover:bg-neutral-700 transition-colors"
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

export { SyntaxHighlighter };
