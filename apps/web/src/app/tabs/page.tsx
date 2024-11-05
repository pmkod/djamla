import React from "react";
import {
  Tab,
  TabContent,
  TabList,
  Tabs,
} from "../../react/components/core/tabs";

const TabsPage = () => {
  return (
    <div>
      <div className="p-20 space-y-20">
        <Tabs defaultValue="account">
          <TabList size="sm">
            <Tab value="account">Account</Tab>
            <Tab value="settings">Settings</Tab>
          </TabList>
          <TabContent value="account">qrgjmoqnrmgorngqerignrez</TabContent>
          <TabContent value="settings">qermguqhermgqrgn</TabContent>
        </Tabs>

        <Tabs defaultValue="account">
          <TabList>
            <Tab value="account">Account</Tab>
            <Tab value="settings">Settings</Tab>
          </TabList>
          <TabContent value="account">qrgjmoqnrmgorngqerignrez</TabContent>
          <TabContent value="settings">qermguqhermgqrgn</TabContent>
        </Tabs>

        <Tabs defaultValue="account">
          <TabList>
            <Tab value="account">Account</Tab>
            <Tab value="settings">Settings</Tab>
          </TabList>
          <TabContent value="account">qrgjmoqnrmgorngqerignrez</TabContent>
          <TabContent value="settings">qermguqhermgqrgn</TabContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TabsPage;
