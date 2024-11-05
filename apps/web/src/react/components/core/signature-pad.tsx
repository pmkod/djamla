import React, { forwardRef } from "react";
import { SignaturePad as SignaturePadPrimitives } from "@ark-ui/react";

const SignaturePad = forwardRef<
  React.ElementRef<typeof SignaturePadPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SignaturePadPrimitives.Root>
>((props, ref) => {
  return (
    <SignaturePadPrimitives.Root
      className="h-full w-full rounded border border-gray-200 bg-gray-50"
      ref={ref}
      drawing={{ size: 2, simulatePressure: true }}
      {...props}
    >
      <SignaturePadPrimitives.Control className="relative h-full w-full">
        <SignaturePadPrimitives.ClearTrigger className="absolute right-3 top-3 rounded border border-gray-300 px-2 pb-1 pt-0.5 text-xs transition-colors hover:bg-gray-100">
          Clear
        </SignaturePadPrimitives.ClearTrigger>
        <SignaturePadPrimitives.Segment className="h-full w-full" />
        <SignaturePadPrimitives.Guide className="absolute bottom-4 left-5 right-4 h-px border-b border-dashed border-b-gray-400" />
      </SignaturePadPrimitives.Control>
    </SignaturePadPrimitives.Root>
  );
});

SignaturePad.displayName = "SignaturePad";

export { SignaturePad };