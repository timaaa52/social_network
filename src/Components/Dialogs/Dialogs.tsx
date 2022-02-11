import React from 'react';
import s from './Dialogs.module.css';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {MessagesPageType} from '../../redux/state';


type DialogsPropsType = {
    dialogData: MessagesPageType
}

export const Dialogs = (props: DialogsPropsType) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
          {props.dialogData.dialogsData.map(el => <DialogsItem name={el.name} id={el.id}/>)}
      </div>
      <div className={s.messages}>
          {props.dialogData.messagesData.map(el => <MessageItem message={el.text}/>)}
      </div>
    </div>
  );
};
