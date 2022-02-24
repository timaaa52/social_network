import React from 'react';


type UserPropsType = {
    avatar: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }

}

export const User = (props: UserPropsType) => {
    return (
        <div>
            <div>
                <div>
                    <img src={props.avatar} alt="avatar"/>
                </div>
                <button>{props.followed}</button>
                <span>
                    <div>{props.fullName}</div>
                    <div>{props.status}</div>
                </span>
                <span>
                    <div>
                        {props.location.city}
                    </div>
                    <div>
                        {props.location.country}
                    </div>
                </span>
            </div>
        </div>
    );
};