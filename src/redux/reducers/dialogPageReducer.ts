import {MessagesPageType} from "../state";


const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'


export const dialogPageReducer = (state: MessagesPageType, action: GeneralType): MessagesPageType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {text: state.messageText};
            return {...state, messagesData: [...state.messagesData, newMessage], messageText: ''};
        }
        case UPDATE_MESSAGE_TEXT: {
            return {...state, messageText: action.payload.message};
        }
        default: return state
    }
}


export type GeneralType = AddMessageACType | UpdateMessageTextACType


export type UpdateMessageTextACType = ReturnType<typeof updateMessageTextAC>;
export const updateMessageTextAC = (message: string) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        payload: {
            message
        }
    } as const
}

export type AddMessageACType = ReturnType<typeof addMessageAC>;
export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE,
    } as const
}