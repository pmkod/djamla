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
import { reactHeroSectionOneCode } from "@repo/react-ui";

const HeroSectionsPage = () => {
  return (
    <>
      <DocText level="titleOne">Hero sections</DocText>
      <BlockPresentation>
        <BlockPreview src="/blocks/hero-sections/hero-section-one" />

        <BlockCodes>
          <ReactTabContent>
            <BlockSyntaxHighlighter>
              {reactHeroSectionOneCode}
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

export default HeroSectionsPage;
