
const SET_AUTH_DATA = 'SET_AUTH_DATA';
const SET_AUTHING = 'SET_AUTHING';

export type authType = {
    login: string | null
    userId: number | null
    email: string | null
    isAuthing: boolean
}

let initialState: authType =  {
    login: null,
    userId: null,
    email: null,
    isAuthing: false,
};


export const authReducer = (state = initialState, action: GeneralType) => {
    switch (action.type) {
        case "SET_AUTH_DATA": {
            return {...state, ...action.payload}
        }
        case "SET_AUTHING": {
            return {...state, isAuthing: action.payload.isAuth}
        }
        default: return state
    }
}


export type GeneralType = setAuthDataACType | setAuthingACType;


export type setAuthDataACType = ReturnType<typeof setAuthDataAC>;
export const setAuthDataAC = (email: string, userId: number, login: string) => {
    return {
        type: SET_AUTH_DATA,
        payload: {
            email,
            userId,
            login,
        }
    } as const
}

export type setAuthingACType = ReturnType<typeof setAuthingAC>;
export const setAuthingAC = (isAuth: boolean) => {
    return {
        type: SET_AUTHING,
        payload: {
            isAuth
        }
    } as const
}
