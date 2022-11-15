import {defineConfig} from 'vitest/config';
import vue from "@vitejs/plugin-vue";
import autoImport from "unplugin-auto-import/vite";

export default defineConfig({
    plugins: [
        vue(),
        autoImport({
            imports: ["vue"],
        }),
    ],
    test: {
        globals: true,
        environment: "jsdom",
        include: ['test/component/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
    },
});