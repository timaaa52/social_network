import {MessagesPageType} from "../../state";
import {v1} from "uuid";
import {addMessageAC, dialogPageReducer, updateMessageTextAC} from "../dialogPageReducer";

test('message text should be correct changed', () => {
    const startState: MessagesPageType = {
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
    }

    const action = updateMessageTextAC('hello');

    const endState = dialogPageReducer(startState, action);

    expect(endState.messageText).toBe('hello');
    expect(endState.messagesData[0].text).toBe('Hello');
});

test('message data should be correct added new item', () => {

    const startState: MessagesPageType = {
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
        messageText: 'Hello people',
    }

    const action = addMessageAC();

    const endState = dialogPageReducer(startState, action)

    expect(endState.messagesData[5].text).toBe('Hello people');
    expect(endState.messagesData.length).toBe(6);
    expect(endState.messageText).toBe('');
})