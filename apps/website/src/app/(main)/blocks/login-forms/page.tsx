import {
  BlockCode,
  BlockPresentation,
  BlockPreview,
} from "@/components/core/block-presentation";
import { DocText } from "@/components/core/doc-text";
import { LoginFormOne, loginFormOneCode } from "@repo/react-ui";
import React from "react";

const LoginFormsPage = () => {
  return (
    <>
      <DocText level="titleOne">Login forms</DocText>
      <BlockPresentation>
        <BlockPreview src="/blocks/login-forms/login-form-one" />

        <BlockCode>{loginFormOneCode}</BlockCode>
      </BlockPresentation>
    </>
  );
};

export default LoginFormsPage;
