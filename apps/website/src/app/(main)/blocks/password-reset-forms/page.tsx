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
import { reactPasswordResetFormOneCode } from "@repo/react-ui";

const PasswordResetFormsPage = () => {
  return (
    <>
      <DocText level="titleOne">Password reset forms</DocText>
      <BlockPresentation>
        <BlockPreview src="/blocks/password-reset-forms/password-reset-form-one" />

        <BlockCodes>
          <ReactTabContent>
            <BlockSyntaxHighlighter>
              {reactPasswordResetFormOneCode}
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

export default PasswordResetFormsPage;
