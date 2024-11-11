import { useState } from "react";
import { SignaturePadDrawEndDetails } from "@ark-ui/react";
import { SignaturePad } from "../core/signature-pad";

export const SignaturePadExample = () => {
  const [signature, setSignature] = useState("");

  const handleDrawEnd = (details: SignaturePadDrawEndDetails) => {
    details.getDataUrl("image/png").then((url) => setSignature(url));
  };
  return (
    <div>
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
  );
};
