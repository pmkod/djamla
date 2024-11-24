import { DocText } from "@/components/core/doc-text";
import { FrameworkItem } from "@/components/items/framework-item";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dark mode",
};

const frameworks = [
  {
    path: "/docs/dark-mode/next",
    label: "Next.js",
    imgSrc: "/next-2.svg",
  },
  {
    path: "/docs/dark-mode/remix",
    label: "Remix",
    imgSrc: "/remix.png",
  },
  {
    path: "/docs/dark-mode/react",
    label: "React",
    imgSrc: "/react.svg",
  },
];

const DarkModePage = () => {
  return (
    <>
      <DocText level="titleOne">Dark mode</DocText>
      <DocText level="paragraph">How to add dark mode to your app.</DocText>

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

export default DarkModePage;
