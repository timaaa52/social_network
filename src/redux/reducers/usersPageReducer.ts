
export enum ActionsOfUserReducer {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_USERS_COUNT = 'SET_USERS_COUNT',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
}

 export type userType = Array<{
    id: number
    photos: {
        small: null | string
        large: null | string
    }
    name: string
    followed: boolean
    status: string
}>

export type usersStateType = {
    users: userType
    pageSize: number
    totalUserCount: number
    currentPage: number
}

const initialState: usersStateType = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1
}

export const usersPageReducer = (state: usersStateType = initialState, action: GeneralType): usersStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.payload.id ? {...u, followed: true} : u)}
        }
        case "UNFOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.payload.id ? {...u, followed: false} : u)}
        }
        case "SET_USERS": {
            return {...state, users: [...action.payload.users]}
        }
        case 'SET_USERS_COUNT': {
            return {...state, totalUserCount: action.payload.count}
        }
        case 'SET_CURRENT_PAGE': {
            return {...state, currentPage: action.patload.page}
        }
        default:
            return state;
    }
}

export type GeneralType = followACType | unFollowACType | setUsersACType | setUsersCountACType | setCurrentPageACType;

export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (page: number) => {
    return {
        type: ActionsOfUserReducer.SET_CURRENT_PAGE,
        patload: {
            page,
        }
    }as const
}

type followACType = ReturnType<typeof followAC>;
export const followAC = (userId: number) => {
    return {
        type: ActionsOfUserReducer.FOLLOW,
        payload: {
            id: userId,
        }
    } as const
}

type unFollowACType = ReturnType<typeof unFollowAC>;
export const unFollowAC = (userId: number) => {
    return {
        type: ActionsOfUserReducer.UNFOLLOW,
        payload: {
            id: userId,
        }
    } as const
}

type setUsersACType = ReturnType<typeof setUsersAC>;
export const setUsersAC = (users: userType) => {
    return {
        type: ActionsOfUserReducer.SET_USERS,
        payload: {
            users,
        }
    }as const
}

type setUsersCountACType = ReturnType<typeof setUsersCountAC>;
export const setUsersCountAC = (count: number) => {
    return {
        type: ActionsOfUserReducer.SET_USERS_COUNT,
        payload: {
            count,
        }
    }as const
}