import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../redux/store";
import {usersStateType, userType} from "../../redux/reducers/usersReducer";
import {User} from "./User/User";

type UsersPropsType = {}

export const Users = (props: UsersPropsType) => {

    const dispatch = useDispatch();
    const users = useSelector<rootReducerType, userType>(state => state.usersPage.users);

    return (
        <div>
            Users will be here
            {users.map(u => {
                <User key={u.id} followed={u.followed} fullName={u.fullName} status={u.status} location={u.location}
                      avatar={u.avatar}/>
            })}
        </div>
    );
};