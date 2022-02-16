import s from './MyPosts.module.css';
import React, {ChangeEvent, RefObject} from "react";
import {Post} from "./Post/Post";
import {PostDataType} from "../../../redux/state";
import {addNewPostAC, updatePostTextAC, GeneralType} from "../../../redux/reducers/profilePageReducer";

type MyPostType = {
    postData: Array<PostDataType>
    postText: string
    dispatch: (action: GeneralType) => void
}


export const MyPosts = (props: MyPostType) => {

    let newText: RefObject<HTMLTextAreaElement> = React.createRef()

    const addNewPost = () => {
        props.dispatch(addNewPostAC());

        // @ts-ignore
        // newText.current.value = '';
    }

    const newPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updatePostTextAC(e.currentTarget.value));
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