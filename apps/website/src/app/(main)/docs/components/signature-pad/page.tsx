import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { FrameworkTabList, FrameworkTabs, ReactTab, ReactTabContent, SolidTab, SolidTabContent } from "@/components/tabs/framework-tabs";
import {
  reactSignaturePadCode,
  SignaturePadExample,
  reactSignaturePadExampleCode,
} from "@repo/react-ui";
import { solidSignaturePadCode } from "@repo/solid-ui";

import { Metadata } from "next";

const title = "Signature Pad";
const description = "A canvas for capturing handwritten signatures.";

export const metadata: Metadata = {
  title,
  description,
};

const SignaturePadPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <SignaturePadExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">
        {reactSignaturePadCode}
      </SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>
        <SyntaxHighlighter language="typescript">
        {solidSignaturePadCode}
      </SyntaxHighlighter>

        </SolidTabContent>
      </FrameworkTabs>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <SignaturePadExample />
      </ComponentPreview>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>

      <SyntaxHighlighter language="typescript">
        {reactSignaturePadExampleCode}
      </SyntaxHighlighter>
        </ReactTabContent>

        <SolidTabContent>

        </SolidTabContent>
      </FrameworkTabs>
    </>
  );
};

export default SignaturePadPage;
