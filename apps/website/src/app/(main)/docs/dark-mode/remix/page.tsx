import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  PackageManagerTabContent,
  PackageManagerTabs,
} from "@/components/tabs/package-manager-tabs";
import { Code } from "@repo/react-ui";

const RemixPage = () => {
  return (
    <>
      <DocText level="titleOne">Dark mode in remix</DocText>
      <DocText level="titleTwo">Intall remix-themes</DocText>
      <PackageManagerTabs>
        <PackageManagerTabContent value="npm">
          <SyntaxHighlighter>npm install remix-themes</SyntaxHighlighter>
        </PackageManagerTabContent>
        <PackageManagerTabContent value="yarn">
          <SyntaxHighlighter>yarn add remix-themes</SyntaxHighlighter>
        </PackageManagerTabContent>
        <PackageManagerTabContent value="pnpm">
          <SyntaxHighlighter>pnpm add remix-themes</SyntaxHighlighter>
        </PackageManagerTabContent>
        <PackageManagerTabContent value="bun">
          <SyntaxHighlighter>bun add remix-themes</SyntaxHighlighter>
        </PackageManagerTabContent>
      </PackageManagerTabs>
      <DocText level="titleTwo">
        Create a session storage and theme session resolver
      </DocText>
      <DocText level="paragraphTwo">
        Create <Code>sessions.server.tsx</Code> in your app folder
      </DocText>
      <SyntaxHighlighter language="typescript">
        {`
import { createCookieSessionStorage } from "@remix-run/node";
import { createThemeSessionResolver } from "remix-themes";

// You can default to 'development' if process.env.NODE_ENV is not set
const isProduction = process.env.NODE_ENV === "production";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "theme",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: ["s3cr3t"],
    // Set domain and secure only if in production
    ...(isProduction
      ? { domain: "your-production-domain.com", secure: true }
      : {}),
  },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
          
`}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Setup remix-themes</DocText>
      <DocText level="paragraphTwo">
        In your <Code>root.tsx</Code> file add following code
      </DocText>
      <SyntaxHighlighter language="typescript">
        {`
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";

import { themeSessionResolver } from "./sessions.server";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import "@repo/tailwind-config/globals.css";


export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
}

// Wrap your app with ThemeProvider.
// \`specifiedTheme\` is the stored theme in the session storage.
// \`themeAction\` is the action name that's used to change the theme in the session storage.
export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}

export function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();

  return (
    <html lang="en" className={theme ?? ""}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

`}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Add an action route</DocText>
      <DocText level="paragraphTwo">
        In <Code>app/routes</Code> folders, create{" "}
        <Code>action.set-theme.ts</Code>
      </DocText>
      <SyntaxHighlighter>
        {`
import { createThemeAction } from "remix-themes";

import { themeSessionResolver } from "../sessions.server";

export const action = createThemeAction(themeSessionResolver);

`}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Add a theme toggle</DocText>
      <DocText level="paragraphTwo">
        Create <Code>theme-dropdown.tsx</Code> file and add following code
      </DocText>
      <SyntaxHighlighter language="typescript">
        {`
import {
  IconButton,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@repo/react-ui";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { Theme, useTheme } from "remix-themes";

const ThemeDropdown = () => {
  const [, setTheme] = useTheme();

  return (
    <Menu>
      <MenuTrigger asChild>
        <IconButton variant="outline" size="md" colorScheme="black">
          <IconSun size={20} className="block dark:hidden" />
          <IconMoon size={20} className="hidden dark:block" />
        </IconButton>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="light" onClick={() => setTheme(Theme.LIGHT)}>
          Light
        </MenuItem>
        <MenuItem value="dark" onClick={() => setTheme(Theme.DARK)}>
          Dark
        </MenuItem>
      </MenuContent>
    </Menu>
  );
};

export { ThemeDropdown };
   
          `}
      </SyntaxHighlighter>
    </>
  );
};

export default RemixPage;
