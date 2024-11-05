import React from "react";
import { Input } from "../../react/components/core/input";

const InputPage = () => {
  return (
    <div className="p-20">
      <div className="max-w-96 space-y-8">
        <Input variant="outline" size="md" placeholder="Type here" />
        <Input variant="ghost" size="md" placeholder="Type here" />
        <Input variant="plain" size="md" placeholder="Type here" />
      </div>
    </div>
  );
};

export default InputPage;
