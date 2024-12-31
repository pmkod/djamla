import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { FrameworkTabList, FrameworkTabs, ReactTab, ReactTabContent, SolidTab, SolidTabContent } from "@/components/tabs/framework-tabs";
import {
  reactAccordionCode,
  AccordionExample,
  reactAccordionExampleCode,
} from "@repo/react-ui";
import {solidAccordionCode} from "@repo/solid-ui"
import { Metadata } from "next";

const title = "Accordion";
const description =
  "A collapsible element that reveals and hides content sections.";

export const metadata: Metadata = {
  title,
  description,
};

const AccordionPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <AccordionExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <FrameworkTabs>
        <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>

<ReactTabContent>

      <SyntaxHighlighter language="typescript">
        {reactAccordionCode}
      </SyntaxHighlighter>
</ReactTabContent>
<SolidTabContent>

<SyntaxHighlighter language="typescript">
        {solidAccordionCode}

        
      </SyntaxHighlighter></SolidTabContent>
      </FrameworkTabs>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <AccordionExample />
      </ComponentPreview>
      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>

        <ReactTabContent>


      <SyntaxHighlighter language="typescript">
        {reactAccordionExampleCode}
      </SyntaxHighlighter>
        </ReactTabContent>
      </FrameworkTabs>



      

      
    </>
  );
};

export default AccordionPage;
