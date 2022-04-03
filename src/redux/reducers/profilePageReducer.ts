import {v1} from "uuid";

const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type PostDataType = {
    id: string
    title: string | undefined
    likesCount: number
}
export type ProfilePageType = {
    postData: Array<PostDataType>
    postText: string
    userProfile: userProfileType
}

export type userProfileType = null | {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}


let initialState: ProfilePageType  = {
    postData: [
        {id: v1(), title: 'Hello it`s my first post', likesCount: 9},
        {id: v1(), title: 'How are you', likesCount: 18},
        {id: v1(), title: 'Hello my friends', likesCount: 0},
        {id: v1(), title: 'Hello my friends', likesCount: 10},
    ],
    postText: '',
    userProfile: null
};

export const profilePageReducer = ( state = initialState, action: GeneralType): ProfilePageType => {
    switch (action.type) {
        case ADD_NEW_POST: {
            let newPost = {
                id: v1(),
                title: state.postText,
                likesCount: 0
            }
            return {...state, postData: [...state.postData, newPost], postText: ''};
        }
        case UPDATE_POST_TEXT: {
            return {...state, postText: action.payload.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, userProfile: action.payload.profile}
        }
        default: return state;
    }
}

export type GeneralType = addNewPostACType | UpdatePostTextACType | setUserProfileTypeAC

export type addNewPostACType = ReturnType<typeof addNewPostAC>
export const addNewPostAC = () => {
    return {
        type: ADD_NEW_POST,
    } as const
}

export type UpdatePostTextACType = ReturnType<typeof updatePostTextAC>
export const updatePostTextAC = (newText: string) => {
    return {
        type: UPDATE_POST_TEXT,
        payload: {
            newText
        }
    } as const
}

type setUserProfileTypeAC = ReturnType<typeof setUserProfileAC>;
export const setUserProfileAC = (profile: userProfileType) => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            profile
        }
    }as const
}