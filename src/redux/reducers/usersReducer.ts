import {v1} from "uuid";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type userType = Array<{
    id: string
    avatar: string
    fullName: string
    followed: boolean
    status: string
    location: {
        city: string
        country: string
    }
}>

export type usersStateType = {
    users: userType
}

const initialState: usersStateType = {
    users: [
        {
            id: v1(),
            fullName: 'Dmitry',
            avatar: '' ,
            followed: false,
            status: 'I am boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            fullName: 'Vitya',
            avatar: '' ,
            followed: true,
            status: 'I am boss',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            id: v1(),
            fullName: 'Katya',
            avatar: '' ,
            followed: false,
            status: 'I am boss',
            location: {city: 'Odessa', country: 'Ukraine'}
        },
        {
            id: v1(),
            fullName: 'Sonya',
            avatar: '' ,
            followed: true,
            status: 'I am boss',
            location: {city: 'Warshaw', country: 'Poland'}
        },
    ]
}

export const usersReducer = (state: usersStateType = initialState, action: GeneralType): usersStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.payload.id ? {...u, followed: true} : u)}
        }
        case "UNFOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.payload.id ? {...u, followed: false} : u)}
        }
        case "SET_USERS": {
            return {...state, users: [...state.users, ...action.payload.users]}
        }
        default:
            return state;
    }
}

type GeneralType = followACType | unFollowACType | setUsersACType;

type followACType = ReturnType<typeof followAC>;
export const followAC = (userId: string) => {
    return {
        type: FOLLOW,
        payload: {
            id: userId,
        }
    } as const
}

type unFollowACType = ReturnType<typeof unFollowAC>;
export const unFollowAC = (userId: string) => {
    return {
        type: UNFOLLOW,
        payload: {
            id: userId,
        }
    } as const
}

type setUsersACType = ReturnType<typeof setUsersAC>;
export const setUsersAC = (users: userType) => {
    return {
        type: SET_USERS,
        payload: {
            users,
        }
    }as const
}