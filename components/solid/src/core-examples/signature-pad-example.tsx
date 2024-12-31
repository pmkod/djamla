"use client";
import { SignaturePadDrawEndDetails } from "@ark-ui/react";
import { useState } from "react";
import { SignaturePad } from "../core/signature-pad";

export const SignaturePadExample = () => {
  const [signature, setSignature] = useState("");

  const handleDrawEnd = (details: SignaturePadDrawEndDetails) => {
    details.getDataUrl("image/svg+xml").then((url) => setSignature(url));
  };
  return (
    <div>
      <div className="h-52 w-96">
        <SignaturePad onDrawEnd={handleDrawEnd} />
      </div>

      <div className="mt-5 h-52 w-96 rounded border bg-neutral-50">
        {signature && (
          <img
            src={signature}
            className="h-full w-full object-cover"
            alt="Signature"
          />
        )}
      </div>
    </div>
  );
};
