import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {addMessageAC, GeneralType, MessagesPageType, updateMessageTextAC} from '../../redux/state';


type DialogsPropsType = {
    dialogData: MessagesPageType
    dispatch: (action: GeneralType) => void
}

export const Dialogs = (props: DialogsPropsType) => {
    const changeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateMessageTextAC(e.currentTarget.value));
     }
    const sendMessageHandler = () => {
        props.dispatch(addMessageAC());
    }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
          {props.dialogData.dialogsData.map(el => <DialogsItem name={el.name} id={el.id}/>)}
      </div>
      <div className={s.messages}>
          {props.dialogData.messagesData.map(el => <MessageItem message={el.text}/>)}
          <textarea onChange={changeMessageTextHandler} value={props.dialogData.messageText}></textarea>
          <button onClick={sendMessageHandler}>Send</button>
      </div>
    </div>
  );
};
