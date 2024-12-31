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
import { reactFooterOneCode } from "@repo/react-ui";

const FootersPage = () => {
  return (
    <>
      <DocText level="titleOne">Footers</DocText>
      <BlockPresentation>
        <BlockPreview src="/blocks/footers/footer-one" />

        <BlockCodes>
          <ReactTabContent>
            <BlockSyntaxHighlighter>
              {reactFooterOneCode}
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

export default FootersPage;
