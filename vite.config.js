import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        plugins: [vue()],
        server: {
            host: 'localhost',
            port: 5177,
            open: true,
            proxy: {
                '/api': {
                    target:"http://localhost:8080", // 使用环境变量
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        }
    }
})
