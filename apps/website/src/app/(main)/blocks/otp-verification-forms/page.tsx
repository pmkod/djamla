import {
  BlockCode,
  BlockPresentation,
  BlockPreview,
} from "@/components/core/block-presentation";
import { DocText } from "@/components/core/doc-text";
import { otpVerificationFormOneCode } from "@repo/react-ui";

const OtpVerficationFormsPage = () => {
  return (
    <>
      <DocText level="titleOne">Otp verfication forms</DocText>
      <BlockPresentation>
        <BlockPreview src="/blocks/otp-verification-forms/otp-verification-form-one" />

        <BlockCode>{otpVerificationFormOneCode}</BlockCode>
      </BlockPresentation>
    </>
  );
};

export default OtpVerficationFormsPage;
