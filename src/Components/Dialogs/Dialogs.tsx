import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {MessagesPageType} from '../../redux/state';
import {addMessageAC, GeneralType, updateMessageTextAC} from "../../redux/reducers/dialogPageReducer";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../redux/store";


type DialogsPropsType = {
}

export const Dialogs = (props: DialogsPropsType) => {

    const dispatch = useDispatch();
    const dialogs = useSelector<rootReducerType, MessagesPageType>(state => state.dialogPage);

    const changeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateMessageTextAC(e.currentTarget.value));
     }
    const sendMessageHandler = () => {
        dispatch(addMessageAC());
    }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
          {dialogs.dialogsData.map(el => <DialogsItem name={el.name} id={el.id}/>)}
      </div>
      <div className={s.messages}>
          {dialogs.messagesData.map(el => <MessageItem message={el.text}/>)}
          <textarea onChange={changeMessageTextHandler} value={dialogs.messageText} placeholder={'Enter your message'}/>
          <button onClick={sendMessageHandler}>Send</button>
      </div>
    </div>
  );
};
