import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import s from './Users.module.css'
import {rootReducerType} from '../../redux/store';
import {
    followAC,
    setCurrentPageAC,
    setIsFetchingAC,
    setUsersAC,
    setUsersCountAC,
    unFollowAC,
    usersStateType,
    userType
} from './../../redux/reducers/usersPageReducer';
import {User} from './User/User';
import axios from 'axios'
import {Dispatch} from 'redux';
import {Preloader} from "../Preloader/Preloader";
import {usersAPI} from "../../api/users-API";

type UsersPropsType = {}

export const UsersContainer = (props: UsersPropsType) => {

    const dispatch = useDispatch<Dispatch>();
    const users = useSelector<rootReducerType, userType>(state => state.usersPage.users);
    const {
        totalUserCount,
        pageSize,
        currentPage,
        isFetching
    } = useSelector<rootReducerType, usersStateType>(state => state.usersPage)
    let pagesCount = Math.ceil(totalUserCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const pageClickHandler = (page: number) => {
        dispatch(setCurrentPageAC(page));
        dispatch(setIsFetchingAC(true))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`, {
            withCredentials: true
        })
            .then(res => {
                dispatch(setUsersAC(res.data.items))
                dispatch(setIsFetchingAC(false))
            })
    }

    const onClickFollowedHandler = (id: number) => {
        usersAPI.followUser(id)
            .then(res => {
                res.data.resultCode === 0 ? dispatch(followAC(id)) : alert(res.data.messages[0])
            })

    }
    const onClickUnFollowedHandler = (id: number) => {
        usersAPI.unFollowUser(id)
            .then(res => {
                res.data.resultCode === 0 ? dispatch(unFollowAC(id)) : alert(res.data.messages[0])
            })
        ;
    }

    useEffect(() => {
        usersAPI.getUsers(currentPage, pageSize)
            .then(res => {
                dispatch(setIsFetchingAC(false))
                dispatch(setUsersAC(res.data.items))
                dispatch(setUsersCountAC(res.data.totalCount))
            })
            .catch(e => alert(e.toString()))
    }, [])


    return (
        <div>
            {
                isFetching
                    ? <Preloader />
                    : <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                        {users.map((u) => <User key={u.id + Math.random()} id={u.id} followed={u.followed} fullName={u.name}
                                                status={u.status}
                                                avatar={u.photos.small}
                                                callback={u.followed ? onClickUnFollowedHandler : onClickFollowedHandler}
                        />)}

                    </div>
            }

            {
                pages.map((num, i) => {
                    return <span key={`${num}_${i}`} style={{cursor: 'pointer'}} onClick={() => pageClickHandler(num)}
                                 className={currentPage === num ? s.selected : ''}>{`${num} `}</span>
                })
            }
        </div>
    );
};