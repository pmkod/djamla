import {
  BlockCode,
  BlockPresentation,
  BlockPreview,
} from "@/components/core/block-presentation";
import { DocText } from "@/components/core/doc-text";
import { footerOneCode } from "@repo/react-ui";
import React from "react";

const FootersPage = () => {
  return (
    <>
      <DocText level="titleOne">Footers</DocText>
      <BlockPresentation>
        <BlockPreview src="/blocks/footers/footer-one" />

        <BlockCode>{footerOneCode}</BlockCode>
      </BlockPresentation>
    </>
  );
};

export default FootersPage;
