
const SET_AUTH_DATA = 'SET_AUTH_DATA';

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
            return {...state, ...action.payload, isAuthing: true}
        }
        default: return state
    }
}


export type GeneralType = setAuthDataACType;


export type setAuthDataACType = ReturnType<typeof setAuthDataAC>;
export const setAuthDataAC = (email: string, userId: number, login: string) => {
    return {
        type: SET_AUTH_DATA,
        payload: {
            email,
            userId,
            login
        }
    } as const
}
