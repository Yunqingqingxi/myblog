import request from "../util/request.js"

export const login = (data) => {
    return request({
        method:'post',
        url:'login',
        data
    })
}