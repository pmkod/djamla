import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { ratingCode, RatingExample, ratingExampleCode } from "@repo/react-ui";

import { Metadata } from "next";

const title = "Rating";
const description = "An interactive score display system.";

export const metadata: Metadata = {
  title,
  description,
};

const RatingPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <RatingExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{ratingCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <RatingExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {ratingExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default RatingPage;
