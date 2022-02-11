import s from "./Post.module.css";
import React from "react";

type PostType = {
    title: string | undefined
    likesCount: number
}

export const Post = (props: PostType) => {
    return (
        <div className='posts'>
            <div className={s.item}>
                <img
                    src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14.jpeg?m6aZMJ2FuRNdIJhw9MbIpcGgJvY3yzW6&size=1200:675"
                    alt="ava"/>
                {props.title}
                <div>
                    <span>likes</span> {props.likesCount}
                </div>

            </div>
        </div>
    )
}