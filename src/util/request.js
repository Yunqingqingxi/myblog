// src/utils/axios.js
import axios from 'axios';
import router from "../router/index.js";
import {useUserStore} from "../store/user"; // 确保路径正确
import {ElMessage} from 'element-plus';

const service = axios.create({
    timeout: 10000, // 请求超时时间
    headers: {
        'Content-Type': 'application/json',
    }
});

// 请求拦截器
service.interceptors.request.use(
    config => {
        
        const tokenStore = useUserStore();
        const token = tokenStore.token;

        if (token) {
           config.headers.Authorization =token;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        if (error.response) {
            switch (error.response.status) { 
                case 400:
                    ElMessage.error('请求无效');
                    break;
                case 401:
                    ElMessage.error('尚未登录，请重新登录');
                    router.push('/login').then(r => {
                        localStorage.removeItem('token');
                    });
                    break;
                case 403:
                    ElMessage.error('您没有权限，请联系管理员');
                    break;
                case 404:
                    ElMessage.error('请求未找到');
                    break;
                case 500:
                    ElMessage.error('系统异常');
                    break;
                case 504:
                    ElMessage.error('请求超时，请稍后再试');
                    break;
                case 301:
                    ElMessage.error('用户名或密码错误');
                    break;
                default:
                    ElMessage.error('系统异常');
                    break;
            }
        }
        return Promise.reject(error);
    }
);

export default service;
