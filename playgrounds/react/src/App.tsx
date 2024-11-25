import { ThemeDropdown } from "./theme-dropdown";
import { ThemeProvider } from "./theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="bg-base-0 h-screen">
        <ThemeDropdown />
        <ThemeDropdown />
        <ThemeDropdown />
      </div>
    </ThemeProvider>
  );
}

export default App;
