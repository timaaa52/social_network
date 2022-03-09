import {v1} from "uuid";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

 export type userType = Array<{
    id: number
    photos: {
        small: null | string
        large: null | string
    }
    name: string
    followed: boolean
    status: string
    // location: {
    //     city: string
    //     country: string
    // }
}>

export type usersStateType = {
    users: userType
}

// export type userType = {
//     name: string
//     id: number
//     photos: {
//         small: null | string
//         large: null | string
//     }
//     status: null | string
//     followed: boolean
// }

// const axios = require('axios');

// const user = axios.get('https://social-network.samuraijs.com/api/1.0/users')
//     .then( (response: userType) =>  response.data.items)
//     .catch( (error: any) => console.log(error) )

const initialState: usersStateType = {
    // users: [
    //     {
    //         id: v1(),
    //         fullName: 'Dmitry',
    //         avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' ,
    //         followed: false,
    //         status: 'I am boss',
    //         location: {city: 'Minsk', country: 'Belarus'}
    //     },
    //     {
    //         id: v1(),
    //         fullName: 'Vitya',
    //         avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' ,
    //         followed: true,
    //         status: 'I am boss',
    //         location: {city: 'Kiev', country: 'Ukraine'}
    //     },
    //     {
    //         id: v1(),
    //         fullName: 'Katya',
    //         avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' ,
    //         followed: false,
    //         status: 'I am boss',
    //         location: {city: 'Odessa', country: 'Ukraine'}
    //     },
    //     {
    //         id: v1(),
    //         fullName: 'Sonya',
    //         avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' ,
    //         followed: true,
    //         status: 'I am boss',
    //         location: {city: 'Warshaw', country: 'Poland'}
    //     },
    // ],
    // users: user
    users: [],
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

export type GeneralType = followACType | unFollowACType | setUsersACType;

type followACType = ReturnType<typeof followAC>;
export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {
            id: userId,
        }
    } as const
}

type unFollowACType = ReturnType<typeof unFollowAC>;
export const unFollowAC = (userId: number) => {
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