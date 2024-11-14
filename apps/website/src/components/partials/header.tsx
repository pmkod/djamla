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
      <div className="sticky z-40 top-0 bg-base-0">
        <Container>
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center">
              <button className="py-2 pr-2 lg:hidden mr-2" onClick={openDrawer}>
                <IconMenu2 className="text-base-800" />
              </button>
              <Link href="/">
                <Logo />
              </Link>
            </div>

            <div className="flex justify-end items-center flex-1 ml-5">
              <div className="hidden lg:flex items-center gap-x-1">
                {headerLinks.map(({ path, label }, index) => (
                  <Link
                    key={index}
                    href={path}
                    className="px-1.5 py-0.5 rounded-sm font-medium border border-transparent text-base-600 hover:bg-base-100 hover:border-base-200 transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <div className="mr-3 sm:ml-5 flex-1 sm:flex-none sm:w-96">
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
      className={`fixed z-40 inset-0 bg-base-0 ${
        open ? "visible" : "invisible"
      }`}
    >
      <Container>
        <div className="flex flex-col h-screen">
          <div className="flex items-center h-14">
            <button
              className="py-2 pr-2 mr-2 text-base-800"
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
                  className="block text-base-700"
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
