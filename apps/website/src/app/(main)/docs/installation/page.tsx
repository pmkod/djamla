import { DocText } from "@/components/core/doc-text";
import { ExternalLink } from "@/components/core/external-link";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { FrameworkItem } from "@/components/items/framework-item";
import {
  PackageManagerTabContent,
  PackageManagerTabs,
} from "@/components/tabs/package-manager-tabs";
import { Tab, TabContent, TabList, Tabs } from "@repo/react-ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation",
};

const frameworks = [
  {
    path: "/docs/installation/react",
    label: "React",
    imgSrc: "/react.svg",
  },

  {
    path: "/docs/installation/solid",
    label: "Solid js",
    imgSrc: "/solid.png",
  },
];

const InstallationPage = () => {
  return (
    <>
          <DocText level="titleOne">Installation</DocText>

      <DocText level="titleTwo">Framework guides</DocText>

      <div className="grid grid-cols-2 gap-4">
        {frameworks.map(({ path, label, imgSrc }, index) => (
          <FrameworkItem
            key={index}
            path={path}
            label={label}
            imgSrc={imgSrc}
          />
        ))}
      </div>
    </>
  );
};

export default InstallationPage;
