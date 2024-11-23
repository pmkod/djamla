import {
  BlockCode,
  BlockPresentation,
  BlockPreview,
} from "@/components/core/block-presentation";
import { DocText } from "@/components/core/doc-text";
import { NewPasswordFormOne, newPasswordFormOneCode } from "@repo/react-ui";
import React from "react";

const NewPasswordFormsPage = () => {
  return (
    <>
      <DocText level="titleOne">New password forms</DocText>
      <BlockPresentation>
        <BlockPreview src="/blocks/new-password-forms/new-password-form-one" />

        <BlockCode>{newPasswordFormOneCode}</BlockCode>
      </BlockPresentation>
    </>
  );
};

export default NewPasswordFormsPage;
