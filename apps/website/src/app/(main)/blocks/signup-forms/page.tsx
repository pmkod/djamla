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
import { reactSignupFormOneCode } from "@repo/react-ui";

const SignupFormsPage = () => {
  return (
    <>
      <DocText level="titleOne">Signup forms</DocText>
      <BlockPresentation>
        <BlockPreview src="/blocks/signup-forms/signup-form-one" />

        <BlockCodes>
          <ReactTabContent>
            <BlockSyntaxHighlighter>
              {reactSignupFormOneCode}
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

export default SignupFormsPage;
