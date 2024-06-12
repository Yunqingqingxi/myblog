import request from "../util/request.js"

// 登录
export const user = (data) => {
    return request({
        method:'post',
        url:'api/user/login',
        data
    })
}
// 登出
export const logout = (data) => {
    return request({
        method:'get',
        url:'api/user/logout',
    })
}
// 注册
export const register = (data) => {
    return request({
        method:'post',
        url:'api/user/register',
        data
    })
}

// 获取用户数据
export const getUserData = () => {
    return request({
        method: 'get',
        url: 'api/user/userinfo',
    });
};