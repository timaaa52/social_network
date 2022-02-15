import {v1} from "uuid";

const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';



type MessagesDataType = {
    text: string
}
type DialogsDataType = {
    id: string
    name: string
}
export type PostDataType = {
    id: string
    title: string | undefined
    likesCount: number
}
export type ProfilePageType = {
    postData: Array<PostDataType>
    postText: string

}
export type MessagesPageType = {
    messagesData: Array<MessagesDataType>
    dialogsData: Array<DialogsDataType>
    messageText: string
}
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscriber: (observer: () => void) => void
    dispatch: (action: GeneralType) => StateType
}

const store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                {id: v1(), title: 'Hello it`s my first post', likesCount: 9},
                {id: v1(), title: 'How are you', likesCount: 18},
                {id: v1(), title: 'Hello my friends', likesCount: 0},
                {id: v1(), title: 'Hello my friends', likesCount: 10},
            ],
            postText: '',
        },
        messagesPage: {
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
        },
    },
    _callSubscriber(){
        console.log('render');
    },
    getState() {
        return this._state
    },
    subscriber(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        switch (action.type) {
            case ADD_NEW_POST: {
                let newPost = {
                    id: v1(),
                    title: this._state.profilePage.postText,
                    likesCount: 0
                }
                this._state.profilePage.postData.push(newPost)
                this._state.profilePage.postText = '';
                this._callSubscriber();
                return this._state
            }
            case UPDATE_POST_TEXT : {
                this._state.profilePage.postText = action.payload.newText;
                this._callSubscriber();
                return this._state
            }
            case ADD_MESSAGE: {
                let newMessage = {text: this._state.messagesPage.messageText};
                this._state.messagesPage.messagesData.push(newMessage);
                this._state.messagesPage.messageText = '';
                this._callSubscriber();
                return this._state
            }
            case UPDATE_MESSAGE_TEXT : {
                this._state.messagesPage.messageText = action.payload.message;
                this._callSubscriber();
                return this._state
            }

            default:
                return this._state
        }
    },
}

export type GeneralType = addNewPostACType | UpdatePostTextACType | AddMessageACType | UpdateMessageTextACType


type addNewPostACType = ReturnType<typeof addNewPostAC>
export const addNewPostAC = () => {
    return {
        type: ADD_NEW_POST,
    } as const
}

type UpdatePostTextACType = ReturnType<typeof updatePostTextAC>
export const updatePostTextAC = (newText: string) => {
    return {
        type: UPDATE_POST_TEXT,
        payload: {
            newText
        }
    } as const
}

type UpdateMessageTextACType = ReturnType<typeof updateMessageTextAC>;
export const updateMessageTextAC = (message: string) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        payload: {
            message
        }
    } as const
}

type AddMessageACType = ReturnType<typeof addMessageAC>;
export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE,
    } as const
}



//  const state: StateType = {
//     profilePage: {
//         postData: [
//             {id: v1(), title: 'Hello it`s my first post', likesCount: 9},
//             {id: v1(), title: 'How are you', likesCount: 18},
//             {id: v1(), title: 'Hello my friends', likesCount: 0},
//             {id: v1(), title: 'Hello my friends', likesCount: 10},
//         ],
//         postText: '',
//     },
//     messagesPage: {
//         messagesData: [
//             {text: 'Hello'},
//             {text: 'Yo'},
//             {text: 'How are you'},
//             {text: 'Yo'},
//             {text: 'Yo'},
//         ],
//         dialogsData: [
//             {id: v1(), name: 'Dimych'},
//             {id: v1(), name: 'Vika'},
//             {id: v1(), name: 'Oleg'},
//             {id: v1(), name: 'Vitya'},
//             {id: v1(), name: 'Katya'},
//         ],
//     },
// }
//
// let rerenderEntireTree = () => {
//     console.log('render');
// }
//
// export let addPost = (message: string | undefined) => {
//     let newPost = {
//         id: v1(),
//         title: message,
//         likesCount: 0
//     }
//     state.profilePage.postData.push(newPost)
//     state.profilePage.postText = '';
//     rerenderEntireTree();
// }
//
// export let newPostText = (value: string) => {
//     state.profilePage.postText = value;
//     rerenderEntireTree();
// }
//
// export const subscriber = (observer: () => void) => {
//     rerenderEntireTree = observer;
// }

//@ts-ignore
window.store = store;

export default store;

