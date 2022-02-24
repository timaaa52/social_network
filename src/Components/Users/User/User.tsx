import React from 'react';


type UserPropsType = {
    avatar: string
    id: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
    callback: (id: string) => void

}

export const User = (props: UserPropsType) => {
    return  <div>
                <div>
                    <img style={{ width: '50px', height: '50px', borderRadius: '30px' }} src={props.avatar} alt="avatar"/>
                </div>
                <button onClick={() => props.callback(props.id)}>{props.followed ? 'Followed' : 'Unfollowed'}</button>
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
};