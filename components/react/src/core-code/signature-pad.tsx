export const signaturePadCode = `import { SignaturePad as SignaturePadPrimitives, SignaturePadDrawEndDetails } from "@ark-ui/react";
import React, { forwardRef } from "react";

const SignaturePad = forwardRef<
  React.ElementRef<typeof SignaturePadPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SignaturePadPrimitives.Root>
>((props, ref) => {
  return (
    <SignaturePadPrimitives.Root
      className="border-base-200 bg-base-50 fill-base-900 h-full w-full rounded border"
      ref={ref}
      drawing={{ size: 2, simulatePressure: true }}
      {...props}
    >
      <SignaturePadPrimitives.Control className="relative h-full w-full">
        <SignaturePadPrimitives.ClearTrigger className="border-base-300 text-base-900 hover:bg-base-100 absolute right-3 top-3 rounded border px-2 pb-1 pt-0.5 text-xs transition-colors">
          Clear
        </SignaturePadPrimitives.ClearTrigger>
        <SignaturePadPrimitives.Segment className="h-full w-full" />
        <SignaturePadPrimitives.Guide className="border-b-base-400 absolute bottom-4 left-5 right-4 h-px border-b border-dashed" />
      </SignaturePadPrimitives.Control>
    </SignaturePadPrimitives.Root>
  );
});

SignaturePad.displayName = "SignaturePad";

export { SignaturePad, type SignaturePadDrawEndDetails };
`