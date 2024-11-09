import { IconClipboard } from "@tabler/icons-react";
import React from "react";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface SyntaxHighlighterProps {
  children: string;
  language: "typescript";
}

const SyntaxHighlighter = ({ children, language }: SyntaxHighlighterProps) => {
  return (
    <div className="relative mb-12">
      <ReactSyntaxHighlighter
        language={language}
        style={androidstudio}
        customStyle={{
          borderRadius: 4,
          fontSize: 14,
          padding: 20,
        }}
        // useInlineStyles={}
      >
        {children}
      </ReactSyntaxHighlighter>
      <div className="absolute top-2.5 right-2.5">
        <button className="p-1.5 rounded border border-neutral-500 hover:bg-neutral-700 transition-colors">
          <IconClipboard size={18} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export { SyntaxHighlighter };
