import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  FrameworkTabList,
  FrameworkTabs,
  ReactTab,
  ReactTabContent,
  SolidTab,
  SolidTabContent,
} from "@/components/tabs/framework-tabs";
import {
  PackageManagerTabContent,
  PackageManagerTabs,
} from "@/components/tabs/package-manager-tabs";
import { Alert, AlertDescription, FormExample } from "@repo/react-ui";
import { Metadata } from "next";

const title = "Form";
const description = "A container for collecting and validating user input.";

export const metadata: Metadata = {
  title,
  description,
};

const FormPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>

      <div>
        <Alert variant="soft" colorScheme="primary">
          <AlertDescription>
            Solid js version will be available soon
          </AlertDescription>
        </Alert>
      </div>
      <ComponentPreview>
        <FormExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <DocText level="paragraphTwo">
        First, install zod, react-hook-form, @hookform/resolvers
      </DocText>
      <PackageManagerTabs>
        <PackageManagerTabContent value="npm">
          <SyntaxHighlighter>
            npm install zod react-hook-form @hookform/resolvers
          </SyntaxHighlighter>
        </PackageManagerTabContent>
        <PackageManagerTabContent value="yarn">
          <SyntaxHighlighter>
            yarn add zod react-hook-form @hookform/resolvers
          </SyntaxHighlighter>
        </PackageManagerTabContent>
        <PackageManagerTabContent value="pnpm">
          <SyntaxHighlighter>
            pnpm add zod react-hook-form @hookform/resolvers
          </SyntaxHighlighter>
        </PackageManagerTabContent>
        <PackageManagerTabContent value="bun">
          <SyntaxHighlighter>
            bun add zod react-hook-form @hookform/resolvers
          </SyntaxHighlighter>
        </PackageManagerTabContent>
      </PackageManagerTabs>
      <DocText level="paragraphTwo">Copy following code</DocText>

      <SyntaxHighlighter language="typescript">""</SyntaxHighlighter>
      {/* <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <FormExample />
      </ComponentPreview> */}
      <DocText level="titleTwo">Example code</DocText>

      <FrameworkTabs>
        <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
          <SyntaxHighlighter language="typescript">""</SyntaxHighlighter>
        </ReactTabContent>

        <SolidTabContent></SolidTabContent>
      </FrameworkTabs>
    </>
  );
};

export default FormPage;
