import s from './MyPosts.module.css';
import React, {ChangeEvent, RefObject} from "react";
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";
import {addNewPostAC, updatePostTextAC} from "../../../redux/reducers/profilePageReducer";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../../redux/store";

type MyPostType = {

}


export const MyPosts = (props: MyPostType) => {

    const dispatch = useDispatch();
    const posts = useSelector<rootReducerType, ProfilePageType>(state => state.profilePage);

    const addNewPost = () => {
        dispatch(addNewPostAC());

    }

    const newPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
       dispatch(updatePostTextAC(e.currentTarget.value));
    }

    return (
        <div>
            My posts
            <div>
                <textarea onChange={newPostText} value={posts.postText}/>
                <button onClick={addNewPost}>Add Post</button>
            </div>
            {posts.postData.map(el => <Post key={el.id} title={el.title} likesCount={el.likesCount}/>)}
        </div>
    )
}