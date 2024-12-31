import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { FrameworkTabList, FrameworkTabs, ReactTab, ReactTabContent, SolidTab, SolidTabContent } from "@/components/tabs/framework-tabs";
import {
  Tab,
  TabContent,
  TabList,
  Tabs,
  reactTabsCode,
  TabsExample,
  reactTabsExampleCode,
} from "@repo/react-ui";
import { solidTabsCode } from "@repo/solid-ui";
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

      <FrameworkTabs>

<FrameworkTabList>
    <ReactTab />
    <SolidTab />
  </FrameworkTabList>
  <ReactTabContent>
  <SyntaxHighlighter language="typescript">{reactTabsCode}</SyntaxHighlighter>

  </ReactTabContent>


  <SolidTabContent>
  <SyntaxHighlighter language="typescript">{solidTabsCode}</SyntaxHighlighter>

  </SolidTabContent>


</FrameworkTabs>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <TabsExample />
      </ComponentPreview>
      <FrameworkTabs>

<FrameworkTabList>
    <ReactTab />
    <SolidTab />
  </FrameworkTabList>
  <ReactTabContent>

  <SyntaxHighlighter language="typescript">
        {reactTabsExampleCode}
      </SyntaxHighlighter>
  </ReactTabContent>


  <SolidTabContent>

  </SolidTabContent>


</FrameworkTabs>
    </>
  );
};

export default TabsPage;
