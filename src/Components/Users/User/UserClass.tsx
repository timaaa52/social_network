import React, {Component} from 'react';
import icon from "../../../assets/icons/avatar-icon.png";

type UserClassPropsType = {
    id: number
    status: string
    avatar: null | string
    fullName: string
    followed: boolean
    callback: (id: number) => void
}

class UserClass extends Component<UserClassPropsType> {


    render() {
        return (
            <div style={{display: 'flex'}}>
                <div style={{width: '400px', minHeight: '100px', border: '1px solid', margin: '5px'}}>
                    <div>
                        <img style={{width: '50px', height: '50px', borderRadius: '30px'}} src={this.props.avatar ? this.props.avatar : icon} alt="avatar"/>
                    </div>
                    <button onClick={() => this.props.callback(this.props.id)}>{this.props.followed ? 'Followed' : 'Unfollowed'}</button>
                    <span>
                            <div>{this.props.fullName}</div>
                            <div>{this.props.status}</div>
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
        );
    }
}

export default UserClass;