import React from "react";
import { Textarea } from "../../react/components/core/textarea";

const TextareaPage = () => {
  return (
    <div className="p-20">
      <div className="max-w-96 flex flex-col gap-y-20">
        <Textarea variant="outline" size="md" placeholder="Type here" />
        <Textarea variant="ghost" size="md" placeholder="Type here" />
        <Textarea variant="plain" size="md" placeholder="Type here" />
      </div>
    </div>
  );
};

export default TextareaPage;
