import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "~", replacement: resolve(__dirname, "/src") }],
    // "": resolve(__dirname, "src"),
  },
  plugins: [reactRefresh(), svgr()],
});
