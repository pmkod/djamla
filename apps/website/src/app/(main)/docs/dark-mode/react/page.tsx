import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import { Code } from "@repo/react-ui";

const ReactPage = () => {
  return (
    <>
      <DocText level="titleOne">Dark mode in react.js</DocText>
      <DocText level="titleTwo">Create ThemeProvider</DocText>
      <DocText level="paragraphTwo">
        Create <Code>theme-provider.tsx</Code> file and add following code.{" "}
      </DocText>
      <SyntaxHighlighter language="typescript">
        {`
import { createContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const storageKey = "theme";

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

const ThemeProvider = ({
  children,
  defaultTheme = "system",
  ...props
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const providerState = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={providerState}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export { ThemeProvider, ThemeProviderContext };

`}
      </SyntaxHighlighter>
      <DocText level="titleTwo">
        In your App component add ThemeProvider
      </DocText>

      <SyntaxHighlighter>
        {`

import { ThemeProvider } from "./theme-provider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system">
      ...
    </ThemeProvider>
  ) 
};

export default App;


`}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Create theme toggle</DocText>

      <DocText level="paragraphTwo">
        Create <Code>theme-dropdown.tsx</Code> and copy the following code.
      </DocText>
      <SyntaxHighlighter>
        {`
import {
  IconButton,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@repo/react-ui";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "./use-theme";

const ThemeDropdown = () => {
  const { setTheme } = useTheme();

  return (
    <Menu>
      <MenuTrigger asChild>
        <IconButton variant="outline" size="md" colorScheme="black">
          <IconSun size={20} className="hidden [html.light_&]:block" />
          <IconMoon size={20} className="hidden [html.dark_&]:block" />
        </IconButton>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="light" onClick={() => setTheme("light")}>
          Light
        </MenuItem>
        <MenuItem value="dark" onClick={() => setTheme("dark")}>
          Dark
        </MenuItem>
        <MenuItem value="system" onClick={() => setTheme("system")}>
          System
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

export default ReactPage;
