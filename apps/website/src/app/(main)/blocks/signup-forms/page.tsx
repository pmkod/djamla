import {
  BlockCode,
  BlockPresentation,
  BlockPreview,
} from "@/components/core/block-presentation";
import { DocText } from "@/components/core/doc-text";
import { signupFormOneCode } from "@repo/react-ui";

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
