"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren, ReactNode } from "react";

export const Sidebar = () => {
  return (
    <div className="space-y-5">
      <SidebarGroup>
        <SidebarGroupTitle>Getting started</SidebarGroupTitle>
        <SidebarGroupContent>
          <SidebarLink path="#">Introduction</SidebarLink>
          <SidebarLink path="#">Installation</SidebarLink>
          <SidebarLink path="#">Dark mode</SidebarLink>
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupTitle>Components</SidebarGroupTitle>
        <SidebarGroupContent>
          <SidebarLink path="/docs/components/accordion">Accordion</SidebarLink>
          <SidebarLink path="/docs/components/alert">Alert</SidebarLink>
          <SidebarLink path="/docs/components/alert-dialog">
            Alert dialog
          </SidebarLink>
          <SidebarLink path="/docs/components/avatar">Avatar</SidebarLink>
          <SidebarLink path="/docs/components/badge">Badge</SidebarLink>
          <SidebarLink path="/docs/components/button">Button</SidebarLink>
          <SidebarLink path="/docs/components/breadcrumb">
            Breadcrumb
          </SidebarLink>
          <SidebarLink path="/docs/components/card">Card</SidebarLink>
          <SidebarLink path="/docs/components/carousel">Carousel</SidebarLink>
          <SidebarLink path="/docs/components/checkbox">Checkbox</SidebarLink>

          <SidebarLink path="/docs/components/code">Code</SidebarLink>
          <SidebarLink path="/docs/components/collapsible">
            Collapsible
          </SidebarLink>
          <SidebarLink path="/docs/components/clipboard">Clipboard</SidebarLink>
          <SidebarLink path="/docs/components/context-menu">
            Context menu
          </SidebarLink>

          <SidebarLink path="/docs/components/drawer">Drawer</SidebarLink>
          <SidebarLink path="/docs/components/dropzone">Dropzone</SidebarLink>
          <SidebarLink path="/docs/components/form">Form</SidebarLink>
          <SidebarLink path="/docs/components/hover-card">
            Hover card
          </SidebarLink>
          <SidebarLink path="/docs/components/icon-button">
            Icon button
          </SidebarLink>
          <SidebarLink path="/docs/components/input">Input</SidebarLink>

          <SidebarLink path="/docs/components/kbd">Kbd</SidebarLink>
          <SidebarLink path="/docs/components/linear-progress">
            Linear progress
          </SidebarLink>
          <SidebarLink path="/docs/components/loader">Loader</SidebarLink>
          <SidebarLink path="/docs/components/pagination">
            Pagination
          </SidebarLink>
          <SidebarLink path="/docs/components/modal">Modal</SidebarLink>
          <SidebarLink path="/docs/components/native-select">
            Native select
          </SidebarLink>
          <SidebarLink path="/docs/components/popover">Popover</SidebarLink>
          <SidebarLink path="/docs/components/pin-input">Pin input</SidebarLink>

          <SidebarLink path="/docs/components/qr-code">Qr code</SidebarLink>
          <SidebarLink path="/docs/components/radio-group">
            Radio group
          </SidebarLink>
          <SidebarLink path="/docs/components/select">Select</SidebarLink>
          <SidebarLink path="/docs/components/separator">Separator</SidebarLink>
          <SidebarLink path="/docs/components/skeleton">Skeleton</SidebarLink>
          <SidebarLink path="/docs/components/signature-pad">
            Signature pad
          </SidebarLink>
          <SidebarLink path="/docs/components/slider">Slider</SidebarLink>
          <SidebarLink path="/docs/components/splitter">Splitter</SidebarLink>
          <SidebarLink path="/docs/components/switch">Switch</SidebarLink>
          <SidebarLink path="/docs/components/table">Table</SidebarLink>
          <SidebarLink path="/docs/components/tabs">Tabs</SidebarLink>
          <SidebarLink path="/docs/components/textarea">Textarea</SidebarLink>
          <SidebarLink path="/docs/components/toast">Toast</SidebarLink>
          <SidebarLink path="/docs/components/toggle-group">
            Toggle group
          </SidebarLink>
          <SidebarLink path="/docs/components/tooltip">Tooltip</SidebarLink>
          <SidebarLink path="/docs/components/tree-view">Tree View</SidebarLink>
        </SidebarGroupContent>
      </SidebarGroup>
    </div>
  );
};

const SidebarGroup = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

const SidebarGroupTitle = ({ children }: PropsWithChildren) => {
  return <div className="mb-2 font-medium text-base-800">{children}</div>;
};

const SidebarGroupContent = ({ children }: PropsWithChildren) => {
  return <div className="space-y-0.5">{children}</div>;
};

interface SidebarLinkProps {
  children: ReactNode;
  path: string;
}

const SidebarLink = ({ children, path }: SidebarLinkProps) => {
  const currentPathname = usePathname();
  const isCurrentPath = path === currentPathname;
  return (
    <Link
      href={path}
      className={`block cursor-pointer text-base-600 border-b transition-colors ${
        isCurrentPath
          ? "border-b-primary-400 text-primary-500 font-semibold"
          : "border-b-transparent hover:border-b-base-300 hover:text-base-900"
      }`}
    >
      {children}
    </Link>
  );
};
