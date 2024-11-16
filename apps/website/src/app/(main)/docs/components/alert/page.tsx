import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { alertCode, AlertExample, alertExampleCode } from "@repo/react-ui";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@repo/react-ui";
import { IconInfoCircle } from "@tabler/icons-react";
import { Metadata } from "next";

const title = "Alert";
const description = "A message that displays important information.";

export const metadata: Metadata = {
  title,
  description,
};

const AlertPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview
        defaultColorScheme="primary"
        colorSchemes={["primary", "green", "red", "black"]}
        defaultVariant="solid"
        variants={["solid", "outline", "soft", "plain"]}
      >
        <Alert>
          <AlertIcon>
            <IconInfoCircle size={20} />
          </AlertIcon>
          <AlertContent>
            <AlertTitle>Hello</AlertTitle>
            <AlertDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur cupiditate culpa, ex veniam impedit nobis aliquam
              officia error commodi atque?
            </AlertDescription>
          </AlertContent>
        </Alert>
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{alertCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <AlertExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {alertExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default AlertPage;
