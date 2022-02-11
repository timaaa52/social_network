import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsItemsPropsType = {
    name: string
    id: string
}

export const DialogsItem = (props: DialogsItemsPropsType) => {
    const path = `/dialogs/${props.id}`

    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};
