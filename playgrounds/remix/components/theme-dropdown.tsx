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
