import {
  BlockCode,
  BlockPresentation,
  BlockPreview,
} from "@/components/core/block-presentation";
import { DocText } from "@/components/core/doc-text";
import { headerOneCode } from "@repo/react-ui";

const HeadersPage = () => {
  return (
    <>
      <DocText level="titleOne">Headers</DocText>
      <BlockPresentation>
        <BlockPreview src="/blocks/headers/header-one">
          {/* <div className="relative pb-20">
            <HeaderOne />
          </div> */}
        </BlockPreview>

        <BlockCode>{headerOneCode}</BlockCode>
      </BlockPresentation>
    </>
  );
};

export default HeadersPage;
