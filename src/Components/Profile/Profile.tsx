import React, {ProfilerProps} from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../redux/state";

type ProfilePropsType = {
    postData: Array<PostDataType>
    addPost: (message: string | undefined) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts postData={props.postData} addPost={props.addPost}/>
        </div>
    )
}