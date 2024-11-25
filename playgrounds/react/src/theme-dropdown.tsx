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
