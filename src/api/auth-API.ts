import {instanceAPI} from "./instance-API";

export const authAPI = {
    authMe() {
       return instanceAPI.get(`/auth/me`)
    },
    authLogIn(email: string, password: string, rememberMe: boolean, captcha: boolean) {
        return instanceAPI.post(`/auth/login`, {email, password, rememberMe, captcha})
    },
    authLogOut(){
        return instanceAPI.delete(`/auth/login`)
    }
}
