import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";

const NextPage = () => {
  return (
    <>
      <DocText level="titleOne">Dark mode in next.js</DocText>
      <DocText level="titleTwo">Intall next-themes</DocText>
      <SyntaxHighlighter language="typescript">
        document.documentElement.classList.add("dark");
      </SyntaxHighlighter>
      <DocText level="titleTwo">Add ThemeProvider</DocText>

      <DocText level="paragraph">
        Add ThemeProvider to root layout, and add{" "}
        <span className="bg-base-200 text-base-900 px-1 font-medium">
          bg-base-0
        </span>{" "}
        in body className
      </DocText>
      <SyntaxHighlighter language="typescript">
        {`
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-base-0">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
        `}
      </SyntaxHighlighter>

      <DocText level="titleTwo">Add theme switch button</DocText>
      <SyntaxHighlighter language="typescript">
        {`
"use client";
import { IconButton } from "@repo/react-ui";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useCallback } from "react";

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
    </IconButton>
  );
};

export { ThemeSwitch };
  `}
      </SyntaxHighlighter>
    </>
  );
};

export default NextPage;
