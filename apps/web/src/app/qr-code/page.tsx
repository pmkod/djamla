import React from "react";
import { QrCode, QrCodeOverlay } from "../../react/components/core/qr-code";

const QrCodePage = () => {
  return (
    <div className="p-20">
      <div className="w-32">
        <QrCode value="http://ark-ui.com">
          <QrCodeOverlay>
            <img src="https://ark-ui.com/icon-192.png" alt="Ark UI Logo" />
          </QrCodeOverlay>
        </QrCode>
      </div>
    </div>
  );
};

export default QrCodePage;
