import React, { useEffect } from "react";
import { useLocalStorage } from "@mantine/hooks";
import { IconButton } from "@repo/react-ui";
import { IconMoon, IconSun } from "@tabler/icons-react";

const themeKey = "theme";

const lightThemeName = "light";
const darkThemeName = "dark";

const ThemeSwitch = () => {
  const [theme, setTheme] = useLocalStorage({
    key: themeKey,
    defaultValue: localStorage.getItem(themeKey) || "",
    getInitialValueInEffect: false,
  });

  const changeTheme = () => {
    if (theme === lightThemeName) {
      setTheme(darkThemeName);
    } else {
      setTheme(lightThemeName);
    }
  };

  useEffect(() => {
    document.documentElement.classList.remove(lightThemeName, darkThemeName);
    document.documentElement.classList.add(theme);
  }, [theme]);

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
