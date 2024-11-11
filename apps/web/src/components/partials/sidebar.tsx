"use client";
import { sidebarLinks } from "@/constants/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren, ReactNode } from "react";

export const Sidebar = () => {
  return (
    <div className="space-y-10">
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
          {sidebarLinks.map(({ path, label }, index) => (
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
      className={`block py-px cursor-pointer text-base-600 transition-colors ${
        isCurrentPath ? "text-primary-500 font-semibold" : "hover:text-base-900"
      }`}
    >
      {children}
    </Link>
  );
};
