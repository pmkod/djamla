"use client";
import {} from "@ark-ui/react";
import { Tab, TabContent, TabList, Tabs } from "@repo/react-ui";
import { PropsWithChildren, ReactNode } from "react";

const PackageManagerTabs = ({ children }: PropsWithChildren) => {
  return (
    <Tabs defaultValue="npm">
      <TabList>
        <Tab value="npm">npm</Tab>
        <Tab value="yarn">yarn</Tab>
        <Tab value="pnpm">pnpm</Tab>
        <Tab value="bun">bun</Tab>
      </TabList>
      {children}
    </Tabs>
  );
};

interface PackageManagerTabContentProps {
  value: "npm" | "pnpm" | "yarn" | "bun";
  children: ReactNode;
}
const PackageManagerTabContent = ({
  value,
  children,
}: PackageManagerTabContentProps) => {
  return <TabContent value={value}>{children}</TabContent>;
};

export { PackageManagerTabContent, PackageManagerTabs };
