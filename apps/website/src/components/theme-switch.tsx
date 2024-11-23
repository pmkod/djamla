"use client";
import React, { useEffect } from "react";
import { useLocalStorage } from "@mantine/hooks";
import { IconButton } from "@repo/react-ui";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "@/hooks/use-theme";

const ThemeSwitch = () => {
  const { theme, setTheme, lightThemeName, darkThemeName } = useTheme();

  const changeTheme = () => {
    if (theme === lightThemeName) {
      setTheme(darkThemeName);
    } else {
      setTheme(lightThemeName);
    }
  };

  return (
    <IconButton
      variant="ghost"
      colorScheme="black"
      size="sm"
      onClick={changeTheme}
    >
      {theme === lightThemeName ? (
        <IconSun size={22} />
      ) : (
        <IconMoon size={22} />
      )}
    </IconButton>
  );
};

export { ThemeSwitch };
