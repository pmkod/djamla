"use client";
import { coreComponents } from "@/constants/components";
import { sidebarGettingStartedLinks } from "@/constants/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren, ReactNode } from "react";

export const Sidebar = () => {
  return (
    <div className="space-y-10 pb-32">
      <SidebarGroup>
        <SidebarGroupTitle>Getting started</SidebarGroupTitle>
        <SidebarGroupContent>
          {sidebarGettingStartedLinks.map(({ path, label }, index) => (
            <SidebarLink key={index} path={path}>
              {label}
            </SidebarLink>
          ))}
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupTitle>Components</SidebarGroupTitle>
        <SidebarGroupContent>
          {coreComponents.map(({ path, label }, index) => (
            <SidebarLink key={index} path={path}>
              {label}
            </SidebarLink>
          ))}
        </SidebarGroupContent>
      </SidebarGroup>
    </div>
  );
};

const SidebarGroup = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

const SidebarGroupTitle = ({ children }: PropsWithChildren) => {
  return <div className="text-base-800 mb-2 font-medium">{children}</div>;
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
      className={`text-base-600 block cursor-pointer py-px transition-colors ${
        isCurrentPath ? "text-primary-500 font-semibold" : "hover:text-base-900"
      }`}
    >
      {children}
    </Link>
  );
};
