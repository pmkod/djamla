import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dark mode",
};

const DarkModePage = () => {
  return (
    <>
      <DocText level="titleOne">Dark mode</DocText>
      <DocText level="paragraph">How to switch to dark mode</DocText>
      <DocText level="titleTwo">Switch to dark mode</DocText>
      <DocText level="paragraph">
        To switch to dark mode, you need to add .dark class to your document
      </DocText>
      <SyntaxHighlighter language="typescript">
        document.documentElement.classList.add("dark");
      </SyntaxHighlighter>

      <DocText level="titleTwo">Switch to light mode</DocText>
      <DocText level="paragraph">
        To switch to dark mode, you need to remove .dark class to your document
      </DocText>
      <SyntaxHighlighter language="typescript">
        document.documentElement.classList.remove("dark");
      </SyntaxHighlighter>

      <DocText level="titleTwo">Example</DocText>
      <DocText level="paragraphTwo">
        This in the code of the theme swith button i use on this website.
      </DocText>
      <SyntaxHighlighter language="typescript">
        {`
"use client";
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
  });

  const changeTheme = () => {
    if (theme === lightThemeName) {
      setTheme(darkThemeName);
    } else {
      setTheme(lightThemeName);
    }
  };

  useEffect(() => {
    if (theme === lightThemeName) {
      document.documentElement.classList.remove(darkThemeName);
    } else {
      document.documentElement.classList.add(darkThemeName);
    }
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


  `}
      </SyntaxHighlighter>
    </>
  );
};

export default DarkModePage;
