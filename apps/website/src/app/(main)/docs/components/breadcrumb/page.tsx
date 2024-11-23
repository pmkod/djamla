import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  breadcrumbCode,
  BreadcrumbExample,
  breadcrumbExampleCode,
} from "@repo/react-ui";
import { Metadata } from "next";

const title = "Breadcrumb";
const description =
  "A navigation element showing the current location hierarchy.";

export const metadata: Metadata = {
  title,
  description,
};

const BreadcrumbPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <BreadcrumbExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">
        {breadcrumbCode}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <BreadcrumbExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {breadcrumbExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default BreadcrumbPage;
