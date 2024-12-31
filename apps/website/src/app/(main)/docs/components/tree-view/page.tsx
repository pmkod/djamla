import { Metadata } from "next";

const title = "Tree View";
const description = "A temporary notification message.";

export const metadata: Metadata = {
  title,
  description,
};

const TreeViewPage = () => {
  return (
    <>
      To do
      {/* <DocText></DocText>
      <DocText level="paragraph"></DocText>
      <ComponentPreview>
        <TreeViewExample />
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      
      <FrameworkTabs>
      
      <FrameworkTabList>
      <ReactTab />
      <SolidTab />
      </FrameworkTabList>
      <ReactTabContent>
      
      <SyntaxHighlighter language="typescript">
        {treeViewCode}
      </SyntaxHighlighter>

      </ReactTabContent>

        <SolidTabContent>

        </SolidTabContent>
      </FrameworkTabs>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <TreeViewExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {treeViewExampleCode}
      </SyntaxHighlighter> */}
    </>
  );
};

export default TreeViewPage;
