import React from 'react';
import s from "../Dialogs.module.css";

type MessageItemPropsType = {
    message: string
}

export const MessageItem = (props: MessageItemPropsType) => {
    return (
        <>
            <div className={s.message}>{props.message}</div>
        </>
    )
};
