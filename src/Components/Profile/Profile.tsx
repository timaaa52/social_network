import React, {useEffect} from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {withRouter} from "react-router-dom";
import axios from "axios";
import {setUserProfileAC} from "../../redux/reducers/profilePageReducer";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";

type ProfilePropsType = {
}

export const Profile = (props: any) => {

    const dispatch = useDispatch<Dispatch>()

    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) userId = '2';
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((res) => {
                dispatch(setUserProfileAC(res.data))
            })
    }, [])

    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}
withRouter(Profile);
