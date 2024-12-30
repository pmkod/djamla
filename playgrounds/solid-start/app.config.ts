import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
    vite: {
        ssr: {
            external: ["@repo/solid-ui", "@repo/tailwind-config"]
        }
    },

    ssr: false
});
