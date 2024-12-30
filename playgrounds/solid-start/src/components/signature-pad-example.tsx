import { SignaturePadDrawEndDetails } from "@repo/solid-ui";
import { SignaturePad } from "@repo/solid-ui";
import { createSignal } from "solid-js";

export const SignaturePadExample = () => {
  const [signature, setSignature] = createSignal("");

  const handleDrawEnd = (details: SignaturePadDrawEndDetails) => {
    details.getDataUrl("image/svg+xml").then((url) => setSignature(url));
  };
  return (
    <div>
      <div class="h-52 w-96">
        <SignaturePad onDrawEnd={handleDrawEnd} />
      </div>

      <div class="mt-5 h-52 w-96 rounded border bg-neutral-50">
        {signature && (
          <img
            src={signature()}
            class="h-full w-full object-cover"
            alt="Signature"
          />
        )}
      </div>
    </div>
  );
};
