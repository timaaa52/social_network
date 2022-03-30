import React from 'react';
import icon from '../../../icons/avatar-icon.png'

type UserPropsType = {
    avatar: string | null
    id: number
    followed: boolean
    fullName: string
    status: string
    // location: {
    //     city: string
    //     country: string
    // }
    callback: (id: number) => void

}

export const User = (props: UserPropsType) => {
    return <div style={{display: 'flex'}}>

                <div style={{width: '400px', minHeight: '100px', border: '1px solid', margin: '5px'}}>
                    <div>
                        <img style={{width: '50px', height: '50px', borderRadius: '30px'}} src={props.avatar ? props.avatar : icon} alt="avatar"/>
                    </div>
                    <button onClick={() => props.callback(props.id)}>{props.followed ? 'Followed' : 'Unfollowed'}</button>
                    <span>
                            <div>{props.fullName}</div>
                            <div>{props.status}</div>
                        </span>
                    <span>
                            <div>
                                {'props.location.city'}
                            </div>
                            <div>
                                {'props.location.country'}
                            </div>
                        </span>
                </div>
            </div>
};