import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
// 配置别名
import path from "path";

// https://vitejs.dev/config/
export default defineConfig( {
        plugins: [
            vue(),
            WindiCSS()
        ],
        resolve:{
          alias:{
              '@':path.resolve(__dirname,'./src') // 配置别名
          }
        },
        server: {
            host: 'localhost',
            port:3000,
            open: true,
            proxy: {
                '/api': {
                    target:"http://localhost:8080", // 使用环境变量
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        },
})
