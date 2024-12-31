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
import { reactOtpVerificationFormOneCode } from "@repo/react-ui";

const OtpVerficationFormsPage = () => {
  return (
    <>
      <DocText level="titleOne">Otp verfication forms</DocText>
      <BlockPresentation>
        <BlockPreview src="/blocks/otp-verification-forms/otp-verification-form-one" />

        <BlockCodes>
          <ReactTabContent>
            <BlockSyntaxHighlighter>
              {reactOtpVerificationFormOneCode}
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

export default OtpVerficationFormsPage;
