import {MessagesPageType} from "../state";
import {v1} from "uuid";


const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'


let initialState =  {
    messagesData: [
        {text: 'Hello'},
        {text: 'Yo'},
        {text: 'How are you'},
        {text: 'Yo'},
        {text: 'Yo'},
    ],
    dialogsData: [
        {id: v1(), name: 'Dimych'},
        {id: v1(), name: 'Vika'},
        {id: v1(), name: 'Oleg'},
        {id: v1(), name: 'Vitya'},
        {id: v1(), name: 'Katya'},
    ],
    messageText: '',
};


export const dialogPageReducer = (state: MessagesPageType = initialState, action: GeneralType): MessagesPageType => {
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