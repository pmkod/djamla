import {
  BlockCode,
  BlockPresentation,
  BlockPreview,
} from "@/components/core/block-presentation";
import { DocText } from "@/components/core/doc-text";
import { SignupFormOne, signupFormOneCode } from "@repo/react-ui";
import React from "react";

const SignupFormsPage = () => {
  return (
    <>
      <DocText level="titleOne">Signup forms</DocText>
      <BlockPresentation>
        <BlockPreview src="/blocks/signup-forms/signup-form-one" />

        <BlockCode>{signupFormOneCode}</BlockCode>
      </BlockPresentation>
    </>
  );
};

export default SignupFormsPage;
