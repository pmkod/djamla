import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  dropzoneCode,
  DropzoneExample,
  dropzoneExampleCode,
} from "@repo/react-ui";
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
      <SyntaxHighlighter language="typescript">
        {dropzoneCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <DropzoneExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {dropzoneExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default DropzonePage;
