import React from 'react';
import icon from '../../../assets/icons/avatar-icon.png'
import {NavLink} from "react-router-dom";

type UserPropsType = {
    avatar: string | null
    id: number
    followed: boolean
    fullName: string
    status: string
    callback: (id: number) => void
}

export const User = (props: UserPropsType) => {
    return <>
        <div style={{display: 'flex'}}>
            <div style={{width: '400px', minHeight: '100px', border: '1px solid', margin: '5px'}}>
                <div>
                    <NavLink to={`/profile/${props.id}`} >
                    <img style={{width: '50px', height: '50px', borderRadius: '30px'}}
                         src={props.avatar ? props.avatar : icon}
                         alt="avatar"/>
                    </NavLink>
                </div>
                <button
                    onClick={() => props.callback(props.id)}>{props.followed ? 'Followed' : 'Unfollowed'}</button>
                <span>
                    <div>{props.fullName}</div>
                    <div>{props.status}</div>
                </span>
            </div>
        </div>
    </>
};