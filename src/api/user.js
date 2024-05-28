import request from "../util/request.js"

// 登录
export const user = (data) => {
    return request({
        method:'post',
        url:'api/login',
        data
    })
}
// 登出
export const logout = (data) => {
    return request({
        method:'post',
        url:'/logout',
    })
}
// 获取用户数据
export const getUserData = () => {
    return request({
        method: 'get',
        url: 'api/user',
    });
};