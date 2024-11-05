import React from "react";
import { PinInput } from "../../react/components/core/pin-input";

const PinInputPage = () => {
  return (
    <div>
      <div className="p-6">
        <PinInput length={6} />
      </div>
    </div>
  );
};

export default PinInputPage;
