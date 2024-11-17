export const qrCodeExampleCode = `import { QrCode, QrCodeOverlay } from "../core/qr-code";

export const QrCodeExample = () => {
  return (
    <div className="w-32">
      <QrCode value="http://ark-ui.com">
        <QrCodeOverlay>
          <img src="https://ark-ui.com/icon-192.png" alt="Ark UI Logo" />
        </QrCodeOverlay>
      </QrCode>
    </div>
  );
};
`;
