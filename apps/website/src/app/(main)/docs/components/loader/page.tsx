import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  Loader,
  loaderCode,
  LoaderExample,
  loaderExampleCode,
} from "@repo/react-ui";
import { Metadata } from "next";

const title = "Loader";
const description = "A visual indicator for loading states.";

export const metadata: Metadata = {
  title,
  description,
};

const LoaderPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview
        defaultSize="md"
        sizes={["sm", "md", "lg", "xl"]}
        defaultColorScheme="primary"
        colorSchemes={["primary", "black", "green", "red"]}
      >
        <Loader />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{loaderCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <LoaderExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {loaderExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default LoaderPage;
