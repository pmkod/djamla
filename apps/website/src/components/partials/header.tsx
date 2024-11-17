"use client";
import React, { Dispatch, useCallback, useEffect, useState } from "react";
import { Logo } from "../core/logo";
import Link from "next/link";
import { Container } from "../core/container";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { GithubIcon } from "../icons/github-icon";
import { githupRepoLink, headerLinks } from "@/constants/links";
import { Sidebar } from "./sidebar";
import { usePathname } from "next/navigation";
import { Searcher } from "../searcher";
import { ThemeSwitch } from "../theme-switch";

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  return (
    <>
      <div className="bg-base-0 sticky top-0 z-40">
        <Container>
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center">
              <button className="mr-2 py-2 pr-2 lg:hidden" onClick={openDrawer}>
                <IconMenu2 className="text-base-800" />
              </button>
              <Link href="/">
                <Logo />
              </Link>
            </div>

            <div className="ml-5 flex flex-1 items-center justify-end">
              <div className="hidden items-center gap-x-1 lg:flex">
                {headerLinks.map(({ path, label }, index) => (
                  <Link
                    key={index}
                    href={path}
                    className="text-base-600 hover:bg-base-100 hover:border-base-200 rounded-sm border border-transparent px-1.5 py-0.5 font-medium transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <div className="mr-3 flex-1 sm:ml-5 sm:w-96 sm:flex-none">
                <Searcher />
              </div>
              <div className="mr-2">
                <ThemeSwitch />
              </div>
              <div>
                <Link
                  href={githupRepoLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GithubIcon className="text-base-800" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Drawer open={isDrawerOpen} setOpen={setIsDrawerOpen} />
    </>
  );
};

interface DrawerProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}

const Drawer = ({ open, setOpen }: DrawerProps) => {
  const hideDrawer = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const pathname = usePathname();
  useEffect(() => {
    hideDrawer();
  }, [pathname, hideDrawer]);
  return (
    <div
      className={`bg-base-0 fixed inset-0 z-40 ${
        open ? "visible" : "invisible"
      }`}
    >
      <Container>
        <div className="flex h-screen flex-col">
          <div className="flex h-14 items-center">
            <button
              className="text-base-800 mr-2 py-2 pr-2"
              onClick={hideDrawer}
            >
              <IconX />
            </button>
            <Link href="/" onClick={hideDrawer}>
              <Logo />
            </Link>
          </div>

          <div className="flex-1 overflow-auto pt-2">
            <div className="pb-5">
              {headerLinks.map(({ path, label }, index) => (
                <Link
                  key={index}
                  href={path}
                  className="text-base-700 block"
                  onClick={hideDrawer}
                >
                  {label}
                </Link>
              ))}
            </div>
            <Sidebar />
          </div>
        </div>
      </Container>
    </div>
  );
};
