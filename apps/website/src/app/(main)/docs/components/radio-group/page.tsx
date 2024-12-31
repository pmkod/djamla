import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { FrameworkTabList, FrameworkTabs, ReactTab, ReactTabContent, SolidTab, SolidTabContent } from "@/components/tabs/framework-tabs";
import {
  RadioGroup,
  radioGroupCode,
  RadioGroupExample,
  radioGroupExampleCode,
  RadioGroupItem,
} from "@repo/react-ui";

import { Metadata } from "next";

const title = "Radio Group";
const description = "A set of mutually exclusive options.";

export const metadata: Metadata = {
  title,
  description,
};

const RadioGroupPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview defaultSize="md">
        <RadioGroup orientation="horizontal">
          <RadioGroupItem value="a" size="sm">
            React
          </RadioGroupItem>
          <RadioGroupItem value="b" size="md">
            Solid
          </RadioGroupItem>
          <RadioGroupItem value="c" size="lg">
            Vue
          </RadioGroupItem>
          <RadioGroupItem value="d" size="xl">
            Svelte
          </RadioGroupItem>
        </RadioGroup>
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">
        {radioGroupCode}
      </SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>

        </SolidTabContent>
      </FrameworkTabs>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <RadioGroupExample />
      </ComponentPreview>

      <FrameworkTabs>

      <FrameworkTabList>
          <ReactTab />
          <SolidTab />
        </FrameworkTabList>
        <ReactTabContent>
      <SyntaxHighlighter language="typescript">
        {radioGroupExampleCode}
      </SyntaxHighlighter>

        </ReactTabContent>

        <SolidTabContent>

        </SolidTabContent>
      </FrameworkTabs>
    </>
  );
};

export default RadioGroupPage;
