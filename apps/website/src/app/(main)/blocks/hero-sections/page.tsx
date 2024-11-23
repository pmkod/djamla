import {
  BlockCode,
  BlockPresentation,
  BlockPreview,
} from "@/components/core/block-presentation";
import { DocText } from "@/components/core/doc-text";
import { heroSectionOneCode } from "@repo/react-ui";

const HeroSectionsPage = () => {
  return (
    <>
      <DocText level="titleOne">Hero sections</DocText>
      <BlockPresentation>
        <BlockPreview src="/blocks/hero-sections/hero-section-one" />

        <BlockCode>{heroSectionOneCode}</BlockCode>
      </BlockPresentation>
    </>
  );
};

export default HeroSectionsPage;
