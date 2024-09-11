import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 设置为 '0.0.0.0' 可以让服务器监听所有 IP 地址上的请求
    port: 3000,       // 自定义端口号
    open: 'http://localhost:3000/intro', // 启动时自动打开的 URL
  }
});
