import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  PackageManagerTabContent,
  PackageManagerTabs,
} from "@/components/tabs/package-manager-tabs";

const NextPage = () => {
  return (
    <>
      <DocText level="titleOne">Dark mode in next.js</DocText>
      <DocText level="titleTwo">Intall next-themes</DocText>
      <PackageManagerTabs>
        <PackageManagerTabContent value="npm">
          <SyntaxHighlighter>npm install next-themes</SyntaxHighlighter>
        </PackageManagerTabContent>
        <PackageManagerTabContent value="yarn">
          <SyntaxHighlighter>yarn add next-themes</SyntaxHighlighter>
        </PackageManagerTabContent>
        <PackageManagerTabContent value="pnpm">
          <SyntaxHighlighter>pnpm add next-themes</SyntaxHighlighter>
        </PackageManagerTabContent>
        <PackageManagerTabContent value="bun">
          <SyntaxHighlighter>bun add next-themes</SyntaxHighlighter>
        </PackageManagerTabContent>
      </PackageManagerTabs>
      <DocText level="titleTwo">Add ThemeProvider</DocText>

      <DocText level="paragraphTwo">Add ThemeProvider to root layout.</DocText>
      <SyntaxHighlighter language="typescript">
        {`
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
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
