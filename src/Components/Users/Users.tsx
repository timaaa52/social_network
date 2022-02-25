import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../redux/store";
import {followAC, unFollowAC, userType} from "../../redux/reducers/usersReducer";
import {User} from "./User/User";

type UsersPropsType = {}

export const Users = (props: UsersPropsType) => {

    const dispatch = useDispatch();
    const users = useSelector<rootReducerType, userType>(state => state.usersPage.users);
    const onClickFollowedHandler = (id: string) => {
        dispatch(followAC(id))
    }
    const onClickUnFollowedHandler = (id: string) => {
        dispatch(unFollowAC(id));
    }

    return (
        <div>
            {users.map(u => <User key={u.id} id={u.id} followed={u.followed} fullName={u.fullName} status={u.status} location={u.location}
                      avatar={u.avatar} callback={u.followed ? onClickUnFollowedHandler : onClickFollowedHandler}/>) }
        </div>
    );
};