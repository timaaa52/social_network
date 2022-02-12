import {v1} from "uuid";

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
}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

 const state: StateType = {
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
    },
}

let rerenderEntireTree = () => {
    console.log('render');
}

export let addPost = (message: string | undefined) => {
    let newPost = {
        id: v1(),
        title: message,
        likesCount: 0
    }
    state.profilePage.postData.push(newPost)
    state.profilePage.postText = '';
    rerenderEntireTree();
}

export let newPostText = (value: string) => {
    state.profilePage.postText = value;
    rerenderEntireTree();
}

export const subscriber = (observer: () => void) => {
    rerenderEntireTree = observer;
}

//@ts-ignore
window.state = state;

export default state;

