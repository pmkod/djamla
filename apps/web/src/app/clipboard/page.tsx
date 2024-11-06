import React from "react";
import { Clipboard } from "../../react/components/core/clipboard";

const ClipboardPage = () => {
  return (
    <div>
      <div className="p-20 flex flex-col gap-y-20 w-96">
        <Clipboard size="sm" value="https://ark-ui.com" />
        <Clipboard size="md" value="https://ark-ui.com" />
        <Clipboard size="lg" value="https://ark-ui.com" />
      </div>
    </div>
  );
};

export default ClipboardPage;
