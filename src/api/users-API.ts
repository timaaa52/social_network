import {instanceAPI} from "./instance-API";

export const usersAPI = {
    getUsers(currentPage: number, count: number) {
        return instanceAPI.get(`/users?page=${currentPage}&count=${count}`)
    },
    followUser(id: number) {
        return instanceAPI.post(`/follow/${id}`)
    },
    unFollowUser(id: number) {
        return instanceAPI.delete(`/follow/${id}`)
    }
}