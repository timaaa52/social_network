import {v1} from "uuid";
import {
    addNewPostACType,
    profilePageReducer,
    ProfilePageType,
    UpdatePostTextACType
} from "./reducers/profilePageReducer";
import {AddMessageACType, dialogPageReducer, UpdateMessageTextACType} from "./reducers/dialogPageReducer";

type MessagesDataType = {
    text: string
}
type DialogsDataType = {
    id: string
    name: string
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
    dispatch: (action: any) => void
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
            userProfile: null,
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
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogPageReducer(this._state.messagesPage, action);
        this._callSubscriber();
        },
}

export type GeneralType = addNewPostACType | UpdatePostTextACType | AddMessageACType | UpdateMessageTextACType








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

