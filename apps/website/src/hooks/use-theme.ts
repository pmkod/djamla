// import { themeKeyName } from "@/constants/themes";
import { useLocalStorage } from "@mantine/hooks";

export const lightThemeName = "light";
export const darkThemeName = "dark";
const themeKeyName = "theme";

const useTheme = () => {
  const [theme, setTheme] = useLocalStorage({
    key: themeKeyName,
  });

  return { theme, setTheme, lightThemeName, darkThemeName };
};

export { useTheme };
