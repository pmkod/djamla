import { themeKeyName } from "@/constants/themes";
import { useLocalStorage } from "@mantine/hooks";

const useTheme = () => {
  const [theme, setTheme] = useLocalStorage({
    key: themeKeyName,
  });

  return { theme, setTheme };
};

export { useTheme };
