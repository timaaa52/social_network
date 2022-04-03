import {instanceAPI} from "./instance-API";

export const profileAPI = {
    getUserProfile(id: string) {
        return instanceAPI.get(`/profile/${id}`)
    },
    getProfileStatus(id: string) {
        return instanceAPI.get(`/profile/status/${id}`)
    },
    updateProfileStatus(status: string) {
        return instanceAPI.put(`/profile/status`, {status})
    }
}