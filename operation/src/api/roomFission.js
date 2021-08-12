import request from "../plugins/axios";
import $store from "@/store";
import Storage from "@/store/Storage";

//海报
export function posterApi (params) {
    return request({
        url: '/roomFission/poster',
        method: 'get',
        params: params
    })
}
//查看助力进度
export function inviteFriendsApi (params) {
    return request({
        url: '/roomFission/inviteFriends',
        method: 'get',
        params: params
    })
}
//领奖
export function receiveApi (params) {
    return request({
        url: '/roomFission/receive',
        method: 'get',
        params: params
    })
}