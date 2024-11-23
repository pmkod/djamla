import {
  BlockCode,
  BlockPresentation,
  BlockPreview,
} from "@/components/core/block-presentation";
import { DocText } from "@/components/core/doc-text";
import { BottomNavOne, bottomNavOneCode } from "@repo/react-ui";
import React from "react";

const BottomNavsPage = () => {
  return (
    <>
      <DocText level="titleOne">Bottom navs</DocText>
      <BlockPresentation>
        <BlockPreview src="/blocks/bottom-navs/bottom-nav-one" />

        <BlockCode>{bottomNavOneCode}</BlockCode>
      </BlockPresentation>
    </>
  );
};

export default BottomNavsPage;
