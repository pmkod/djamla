import { QrCode as QrCodePrimitives } from "@ark-ui/solid";
import { splitProps } from "solid-js";

const QrCode =(props:QrCodePrimitives.RootProps) => {

    const [local, rest] = splitProps(props, ['children'])
  return (
    <QrCodePrimitives.Root class="fill-base-900" {...rest}>
      <QrCodePrimitives.Frame>
        <QrCodePrimitives.Pattern />
      </QrCodePrimitives.Frame>
      {local.children}
    </QrCodePrimitives.Root>
  );
};

QrCode.displayName = "QrCode";

const QrCodeOverlay = (props: QrCodePrimitives.OverlayProps) => {
  return (
    <QrCodePrimitives.Overlay
      {...props}
      class="w-10 rounded-full border-4 border-white"
    />
  );
};


export { QrCode, QrCodeOverlay };
