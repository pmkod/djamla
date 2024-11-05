"use client";
import { SignaturePadDrawEndDetails } from "@ark-ui/react";
import React, { useState } from "react";
import { SignaturePad } from "../../react/components/core/signature-pad";

const SignaturePadPage = () => {
  const [signature, setSignature] = useState("");

  const handleDrawEnd = (details: SignaturePadDrawEndDetails) => {
    details.getDataUrl("image/png").then((url) => setSignature(url));
  };
  return (
    <div>
      <div className="p-20">
        <div className="h-52 w-96">
          <SignaturePad onDrawEnd={handleDrawEnd} />
        </div>

        <div className="mt-5 h-52 w-96">
          {signature && (
            <img
              src={signature}
              className="h-full w-full object-cover"
              alt="Signature"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignaturePadPage;
