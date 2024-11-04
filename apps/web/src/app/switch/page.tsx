import React from "react";
import { Switch } from "../../react/components/core/switch";

const SwitchPage = () => {
  return (
    <div>
      <div className="pt-20 px-8 flex items-start gap-10 flex-wrap">
        <Switch size="sm" />
        <Switch />
        <Switch size="lg" />
      </div>
    </div>
  );
};

export default SwitchPage;
