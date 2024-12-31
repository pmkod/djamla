import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { FrameworkTabList, FrameworkTabs, ReactTab, ReactTabContent, SolidTab, SolidTabContent } from "@/components/tabs/framework-tabs";
import {
  reactDropzoneCode,
  DropzoneExample,
  reactDropzoneExampleCode,
} from "@repo/react-ui";
import { solidDropzoneCode } from "@repo/solid-ui";
import { Metadata } from "next";

const title = "Dropzone";
const description = "An area that accepts file drops and uploads.";

export const metadata: Metadata = {
  title,
  description,
};

const DropzonePage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <DropzoneExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>

      <SyntaxHighlighter language="typescript">
        {reactDropzoneCode}
      </SyntaxHighlighter>
        </ReactTabContent>

        <SolidTabContent>
        <SyntaxHighlighter language="typescript">
        {solidDropzoneCode}
      </SyntaxHighlighter>
        </SolidTabContent>
      </FrameworkTabs>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <DropzoneExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {reactDropzoneExampleCode}
      </SyntaxHighlighter>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>

        </ReactTabContent>

        <SolidTabContent>

        </SolidTabContent>
      </FrameworkTabs>
    </>
  );
};

export default DropzonePage;
