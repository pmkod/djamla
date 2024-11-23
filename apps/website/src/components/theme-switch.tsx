"use client";
import React, { useCallback } from "react";
import { IconButton } from "@repo/react-ui";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

const lightThemeName = "light";
const darkThemeName = "dark";

const ThemeSwitch = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const changeTheme = useCallback(() => {
    setTheme(resolvedTheme === lightThemeName ? darkThemeName : lightThemeName);
  }, [resolvedTheme, setTheme]);

  return (
    <IconButton
      variant="ghost"
      colorScheme="black"
      size="sm"
      onClick={changeTheme}
    >
      <IconSun size={22} className="hidden [html.light_&]:block" />
      <IconMoon size={22} className="hidden [html.dark_&]:block" />
      {/* {resolvedTheme === lightThemeName ? (
      ) : (
      )} */}
    </IconButton>
  );
};

export { ThemeSwitch };
