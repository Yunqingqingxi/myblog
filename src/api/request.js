import axios from 'axios'
import { ElMessage } from 'element-plus'

// 创建 axios 实例
const service = axios.create({
    baseURL: 'http://localhost:8080', // 请求基础路径
    timeout: 5000 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 在请求头中添加 token
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 400:
                    ElMessage.error('请求无效')
                    break
                case 401:
                    ElMessage.error('尚未登录，请重新登录')
                    break
                case 403:
                    ElMessage.error('您没有权限，请联系管理员')
                    break
                case 404:
                    ElMessage.error('请求未找到')
                    break
                case 500:
                    ElMessage.error('系统异常')
                    break
                case 504:
                    ElMessage.error('请求超时，请稍后再试')
                    break
                default:
                    ElMessage.error('系统异常')
                    break
            }
        }
        return Promise.reject(error)
    }
)

export default service
