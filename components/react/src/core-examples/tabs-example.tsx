import { Tab, TabContent, TabList, Tabs } from "../core/tabs";

export const TabsExample = () => {
  return (
    <Tabs defaultValue="account">
      <TabList size="sm">
        <Tab value="account">Account</Tab>
        <Tab value="settings">Settings</Tab>
      </TabList>
      <TabContent value="account">qrgjmoqnrmgorngqerignrez</TabContent>
      <TabContent value="settings">qermguqhermgqrgn</TabContent>
    </Tabs>
  );
};
