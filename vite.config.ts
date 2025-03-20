import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const PORT = import.meta.env?.PORT || 3000;

export default defineConfig({
    plugins: [tailwindcss(), sveltekit()],
    server: {
        port: PORT,
    },
});
