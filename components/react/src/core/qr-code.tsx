import React, { forwardRef } from "react";
import { QrCode as QrCodePrimitives } from "@ark-ui/react";

const QrCode = forwardRef<
  React.ElementRef<typeof QrCodePrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof QrCodePrimitives.Root>
>(({ children, ...props }, ref) => {
  return (
    <QrCodePrimitives.Root ref={ref} {...props}>
      <QrCodePrimitives.Frame>
        <QrCodePrimitives.Pattern />
      </QrCodePrimitives.Frame>
      {children}
    </QrCodePrimitives.Root>
  );
});

QrCode.displayName = "QrCode";

const QrCodeOverlay = forwardRef<
  React.ElementRef<typeof QrCodePrimitives.Overlay>,
  React.ComponentPropsWithoutRef<typeof QrCodePrimitives.Overlay>
>((props, ref) => {
  return (
    <QrCodePrimitives.Overlay
      ref={ref}
      {...props}
      className="w-10 rounded-full border-4 border-white"
    />
  );
});

QrCodeOverlay.displayName = "QrCodeOverlay";

export { QrCode, QrCodeOverlay };