// src/stores/user.js

// 引入 pinia 的 defineStore 方法
import { defineStore } from 'pinia';

// 引入 API 调用方法 getUserData，用于获取用户数据
import { getUserData } from '../api/user';

// 定义一个名为 useUserStore 的 pinia 存储
export const useUserStore = defineStore({
    // 存储的唯一标识符
    id: 'user',
    // 定义存储的状态
    state: () => ({
        token: '', // 存储用户的令牌
        user: null, // 存储用户信息
        isAuthenticated: false // 存储用户是否已认证的状态
    }),
    // 定义存储的 getters，类似于计算属性
    getters: {
        getToken(state) {
            return state.token; // 返回当前存储的令牌
        },
        getUser(state) {
            return state.user; // 返回当前存储的用户信息
        },
        getIsAuthenticated(state) {
            return state.isAuthenticated; // 返回当前用户的认证状态
        }
    },
    // 定义存储的 actions，用于处理业务逻辑和异步操作
    actions: {
        // 设置令牌，并根据令牌状态更新认证状态
        setToken(newToken) {
            this.token = newToken;
            this.isAuthenticated = !!newToken;
            if (newToken) {
                // 如果有新的令牌，将其保存到本地存储
                localStorage.setItem('token', newToken);
            } else {
                // 如果没有令牌，移除本地存储中的令牌
                localStorage.removeItem('token');
            }
        },
        // 清除令牌，重置认证状态和用户信息
        clearToken() {
            this.token = '';
            this.isAuthenticated = false;
            this.user = null;
            localStorage.removeItem('token');
            localStorage.removeItem('pinia-token');
        },
    },
    // 配置数据持久化
    persist: {
        enabled: true, // 启用持久化
        strategies: [
            {
                key: 'user', // 本地存储的 key
                storage: localStorage, // 使用本地存储
                paths: ['token', 'isAuthenticated', 'user'] // 持久化 token, isAuthenticated 和 user 状态
            }
        ]
    }
});
