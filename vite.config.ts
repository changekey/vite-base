import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { join } from "node:path";
import removeConsole from "vite-plugin-remove-console";

export default defineConfig({
  plugins: [react(), removeConsole()],
  resolve: {
    // 配置路径别名
    alias: {
      "@": join(__dirname, "./src"),
    },
  },
  // 优化打包，将node_modules打包到vendor.js中（坑能会导致这个文件过大问题）
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         if (id.includes("node_modules")) {
  //           return "vendor";
  //         }
  //       },
  //     },
  //   },
  // },
  //开发环境代理 查看vite官方文档搜索process，可查看如何在vite.config.ts中获取.env文件中的环境变量
  // server: {
  //   proxy: {
  //     "/v3": {
  //       // target: process.env.VITE_API_BASE_URL,
  //       target: "https://m.capafair.com",
  //       // 使用环境变量定义代理目标地址
  //       changeOrigin: true,
  //       // rewrite: (path) => path.replace(/^\/v3/, ""),
  //     },
  //   },
  // },
});
