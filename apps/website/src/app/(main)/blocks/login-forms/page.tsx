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
import { reactLoginFormOneCode } from "@repo/react-ui";

const LoginFormsPage = () => {
  return (
    <>
      <DocText level="titleOne">Login forms</DocText>
      <BlockPresentation>
        <BlockPreview src="/blocks/login-forms/login-form-one" />
        <BlockCodes>
          <ReactTabContent>
            <BlockSyntaxHighlighter>
              {reactLoginFormOneCode}
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

export default LoginFormsPage;
