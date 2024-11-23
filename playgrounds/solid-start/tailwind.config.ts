import baseTailwindConfig from "@repo/tailwind-config";
import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  presets: [baseTailwindConfig],
};

export default config;
