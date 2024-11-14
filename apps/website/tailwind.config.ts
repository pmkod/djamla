import type { Config } from "tailwindcss";
import baseTailwindConfig from "@repo/tailwind-config";

const config: Omit<Config, "content"> = {
  presets: [baseTailwindConfig],
};

export default config;
