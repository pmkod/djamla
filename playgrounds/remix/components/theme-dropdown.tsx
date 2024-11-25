import {
  IconButton,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@repo/react-ui";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { Theme, useTheme } from "remix-themes";
// import { useTheme } from "./use-theme";

const ThemeDropdown = () => {
  // const { setTheme } = useTheme();
  const [theme, setTheme] = useTheme();

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
        <MenuItem
          value="to-show-current-theme"
          onClick={() => setTheme(Theme.DARK)}
        >
          {theme}
        </MenuItem>
      </MenuContent>
    </Menu>
  );
};

export { ThemeDropdown };
