import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
	plugins: [react(), tailwindcss() as any, cloudflare()],
	resolve: {
		alias: {
			"@/ui": path.resolve(__dirname, "./ui"),
			"@/api": path.resolve(__dirname, "./api"),
		},
	},
});
