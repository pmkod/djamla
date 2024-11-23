import {
  BlockCode,
  BlockPresentation,
  BlockPreview,
} from "@/components/core/block-presentation";
import { DocText } from "@/components/core/doc-text";
import { passwordResetFormOneCode } from "@repo/react-ui";

const PasswordResetFormsPage = () => {
  return (
    <>
      <DocText level="titleOne">Password reset forms</DocText>
      <BlockPresentation>
        <BlockPreview src="/blocks/password-reset-forms/password-reset-form-one" />

        <BlockCode>{passwordResetFormOneCode}</BlockCode>
      </BlockPresentation>
    </>
  );
};

export default PasswordResetFormsPage;
