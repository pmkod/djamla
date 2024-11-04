import React from "react";
import { Kbd, KbdGroup, KbdSeparator } from "../../react/components/core/kbd";

const KbdPage = () => {
  return (
    <div className="p-4">
      <KbdGroup>
        <Kbd size="sm">Ctrl</Kbd>
        <KbdSeparator>+</KbdSeparator>
        <Kbd size="sm">Shift</Kbd>
        <KbdSeparator>+</KbdSeparator>
        <Kbd size="sm">V</Kbd>
      </KbdGroup>
    </div>
  );
};

export default KbdPage;
