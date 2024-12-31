import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { FrameworkTabList, FrameworkTabs, ReactTab, ReactTabContent, SolidTab, SolidTabContent } from "@/components/tabs/framework-tabs";
import {
  Alert,
  alertCode,
  AlertContent,
  AlertDescription,
  AlertExample,
  alertExampleCode,
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
      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">{alertCode}</SyntaxHighlighter>
        </ReactTabContent>

        <SolidTabContent>

        </SolidTabContent>
      </FrameworkTabs>
      <DocText level="titleTwo">Example</DocText>



      <ComponentPreview>
        <AlertExample />
      </ComponentPreview>


      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">
        {alertExampleCode}
      </SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>

        </SolidTabContent>
      </FrameworkTabs>
    </>
  );
};

export default AlertPage;
