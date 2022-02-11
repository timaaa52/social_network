import s from './MyPosts.module.css';
import React, {ChangeEvent, LegacyRef, RefObject, useState} from "react";
import {Post} from "./Post/Post";
import state, {PostDataType} from "../../../redux/state";

type MyPostType = {
    postData: Array<PostDataType>
    postText: string
    addPost: (message: string | undefined) => void
    newPostText: (value: string) => void
}


export const MyPosts = (props: MyPostType) => {

    let newText: RefObject<HTMLTextAreaElement> = React.createRef()

    const addNewPost = () => {
        props.addPost(newText.current?.value);

        // @ts-ignore
        newText.current.value = '';
    }

    const newPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.newPostText(e.currentTarget.value);
    }

    return (
        <div>
            My posts
            <div>
                <textarea ref={newText} onChange={newPostText} value={props.postText}/>
                <button onClick={addNewPost}>Add Post</button>
            </div>
            {props.postData.map(el => <Post key={el.id} title={el.title} likesCount={el.likesCount}/>)}
        </div>
    )
}