import React from "react";
import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  Tab,
  TabContent,
  TabList,
  Tabs,
  tabsCode,
  TabsExample,
  tabsExampleCode,
} from "@repo/react-ui";
import { Metadata } from "next";

const title = "Tabs";
const description = "A set of panels with tabbed navigation.";

export const metadata: Metadata = {
  title,
  description,
};

const TabsPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <div className="w-full">
          <Tabs defaultValue="account">
            <TabList size="sm">
              <Tab value="account">Account</Tab>
              <Tab value="settings">Settings</Tab>
            </TabList>
            <TabContent value="account">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              quos iure maxime ullam nobis non doloremque laudantium, deleniti
              dolores ad!
            </TabContent>
            <TabContent value="settings">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              nam nobis asperiores tempora eaque assumenda. Officiis cum ipsam
              quia dignissimos?
            </TabContent>
          </Tabs>
        </div>
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{tabsCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <TabsExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {tabsExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default TabsPage;
