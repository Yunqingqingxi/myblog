import request from "../util/request.js"

export const user = (data) => {
    return request({
        method:'post',
        url:'api/login',
        data
    })
}
export const logout = (data) => {
    return request({
        method:'post',
        url:'/logout',
    })
}