import {v1} from "uuid";
import {ProfilePageType} from "../state";

const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';


export const profilePageReducer = ( state: ProfilePageType, action: GeneralType): ProfilePageType => {
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
            return {...state, postText: action.payload.newText};
        }
        default: return state;
    }
}

export type GeneralType = addNewPostACType | UpdatePostTextACType

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