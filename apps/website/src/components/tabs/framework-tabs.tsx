import { Tab, TabContent, TabList, Tabs } from "@repo/react-ui";
import React, { PropsWithChildren, ReactNode } from "react";

// 
// 

const REACT = "REACT"
const SOLID = "SOLID"


export const FrameworkTabs = ({ children }: PropsWithChildren) => {
  return <Tabs defaultValue={REACT}>{children}</Tabs>;
};



export const FrameworkTabList = ({ children  }: PropsWithChildren) => {
    return <TabList>{children}</TabList>;
  };
  

  const tabClassName = "text-lg text-base-500 font-semibold"
export const ReactTab = () => {
  return <Tab value={REACT} className={tabClassName}>React</Tab>;
};


export const SolidTab = () => {
    return <Tab value={SOLID} className={tabClassName}>Solid</Tab>;
  };
  


  export const ReactTabContent = ({ children  }: PropsWithChildren) => {
    return <TabContent value={REACT}>{children}</TabContent>;
  };
  

  export const SolidTabContent = ({ children  }: PropsWithChildren) => {
    return <TabContent value={SOLID}>{children}</TabContent>;
  };
  