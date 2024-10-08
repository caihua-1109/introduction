import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // host: '0.0.0.0', // 设置为 '0.0.0.0' 可以让服务器监听所有 IP 地址上的请求
    port: 3001,       // 自定义端口号
    // open: 'http://localhost:3001', // 启动时自动打开的 URL

    proxy: {
      '/api': {
        target: 'http://caihuaoo.xyz',
        changeOrigin: true,

        // target: 'http://127.0.0.1:8082',
        // changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
