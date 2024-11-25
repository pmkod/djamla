import type { MetaFunction } from "@remix-run/node";
import { Button } from "@repo/react-ui";
import { ThemeDropdown } from "components/theme-dropdown";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Button>Aa</Button>
      <Button variant="outline">Aa</Button>
      <ThemeDropdown />
    </div>
  );
}
