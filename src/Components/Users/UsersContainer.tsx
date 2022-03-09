import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../redux/store";
import {followAC, GeneralType, setUsersAC, unFollowAC, userType} from "../../redux/reducers/usersReducer";
import {User} from "./User/User";
import axios from 'axios'
import {Dispatch} from "redux";

type UsersPropsType = {}

export const UsersContainer = (props: UsersPropsType) => {

    const dispatch = useDispatch<Dispatch<GeneralType>>();
    const users = useSelector<rootReducerType, userType>(state => state.usersPage.users);
    const onClickFollowedHandler = (id: number) => {
        dispatch(followAC(id))
    }
    const onClickUnFollowedHandler = (id: number) => {
        dispatch(unFollowAC(id));
    }

    // useEffect(()=>{
    //     axios.get('https://social-network.samuraijs.com/api/1.0/users?page=4&count=100&friend=false')
    //         .then(response => {
    //             dispatch(setUsersAC(response.data.items))
    //         })
    // }, []);


    const setUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response: any) => {
                dispatch(setUsersAC(response.data.items))
            }).catch(e => console.log(e.toString()))
    }


    return (
        <div>
            <button onClick={setUsers}>Set Userss</button>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {users.map((u) => <User key={u.id + Math.random()} id={u.id} followed={u.followed} fullName={u.name} status={u.status}
                                        avatar={u.photos.small}
                                        callback={u.followed ? onClickUnFollowedHandler : onClickFollowedHandler}/>)}

            </div>
        </div>
    );
};