import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
     server: {
        host: 'localhost', // 这个用于启动
        port: '8081', // 指定启动端口
        open: true, //启动后是否自动打开浏览器
          proxy:{ //代理地址
            '/api':{
                  target:'http://localhost:8080', // 目标地址
                  changeOrigin:true, // 反向代理开启
                  rewrite: (path) => path.replace(/^\/api/, '') // 重写路径
              }
          }
      }
})


