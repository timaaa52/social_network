import s from './MyPosts.module.css';
import React, {ChangeEvent, LegacyRef, RefObject, useState} from "react";
import {Post} from "./Post/Post";
import state, {PostDataType} from "../../../redux/state";

type MyPostType = {
    postData: Array<PostDataType>
    addPost: (message: string | undefined) => void
}


export const MyPosts = (props: MyPostType) => {

    let newText: RefObject<HTMLTextAreaElement> = React.createRef()

    const addNewPost = () => {
        props.addPost(newText.current?.value);

        // @ts-ignore
        newText.current.value = '';
    }

    return (
        <div>
            My posts
            <div>
                <textarea ref={newText} onChange={}/>
                <button onClick={addNewPost}>Add Post</button>
            </div>
            {props.postData.map(el => <Post key={el.id} title={el.title} likesCount={el.likesCount}/>)}
        </div>
    )
}