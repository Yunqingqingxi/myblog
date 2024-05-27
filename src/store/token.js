// stores/token.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义一个名为 'token' 的 store
export const useTokenStore = defineStore('token', () => {

    // 使用 ref 定义一个可响应的 token 状态
    const token = ref('')

    // 定义一个方法来设置新的 token
    const setToken = (newToken) => {
        token.value = newToken
    }

    // 定义一个方法来移除 token
    const removeToken = () => {
        token.value = ''
    }

    // 返回 store 的状态和方法
    return {
        token, setToken, removeToken
    }
}, {
    // 启用持久化功能
    persist: true
})
