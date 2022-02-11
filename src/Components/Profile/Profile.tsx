import React, {ProfilerProps} from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {PostDataType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (message: string | undefined) => void
    newPostText: (value: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts
                postData={props.profilePage.postData}
                postText={props.profilePage.postText}
                addPost={props.addPost}
                newPostText={props.newPostText}
            />
        </div>
    )
}