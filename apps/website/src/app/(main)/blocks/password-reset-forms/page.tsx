import {
  BlockCode,
  BlockPresentation,
  BlockPreview,
} from "@/components/core/block-presentation";
import { DocText } from "@/components/core/doc-text";
import { PasswordResetFormOne, passwordResetFormOneCode } from "@repo/react-ui";
import React from "react";

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
