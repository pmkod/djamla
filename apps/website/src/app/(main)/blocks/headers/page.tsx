import { AvailableSoonBlock } from "@/components/available-soon-block";
import {
  BlockCodes,
  BlockPresentation,
  BlockPreview,
} from "@/components/core/block-presentation";
import { BlockSyntaxHighlighter } from "@/components/core/block-syntax-highlighter";
import { DocText } from "@/components/core/doc-text";
import {
  ReactTabContent,
  SolidTabContent,
} from "@/components/tabs/framework-tabs";
import { reactHeaderOneCode } from "@repo/react-ui";

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

        <BlockCodes>
          <ReactTabContent>
            <BlockSyntaxHighlighter>
              {reactHeaderOneCode}
            </BlockSyntaxHighlighter>
          </ReactTabContent>
          <SolidTabContent>
            <AvailableSoonBlock />
          </SolidTabContent>
        </BlockCodes>
      </BlockPresentation>
    </>
  );
};

export default HeadersPage;
