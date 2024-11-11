import { Kbd } from "@repo/react-ui";
import React from "react";

export const Searcher = () => {
  return (
    <div className="h-9 flex justify-between items-center pl-3 pr-1.5 bg-base-100 hover:bg-base-200 transition-colors border border-base-300 rounded-sm cursor-pointer">
      <div className="text-sm font-medium text-base-400">Search</div>

      <Kbd size="md">Ctrl + k</Kbd>
    </div>
  );
};
