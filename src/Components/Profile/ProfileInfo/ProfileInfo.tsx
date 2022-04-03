import React from 'react';
import {userProfileType} from "../../../redux/reducers/profilePageReducer";
import {useSelector} from "react-redux";
import {rootReducerType} from "../../../redux/store";
import icon from './../../../assets/icons/avatar-icon.png'

type ProfileInfoPropsType = {
};

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    const userProfile = useSelector<rootReducerType, userProfileType>(state => state.profilePage.userProfile)
    let styleImg = {
        width: '50px',
        height: '50px',
        borderRadius: '30px'
    }
  return (
    <div>
      <div>
        <img src="https://html5css.ru/css/img_fjords.jpg" alt="" />
      </div>
      <div>ava + descr</div>
        <div>
            {userProfile &&
                <img style={userProfile.photos.small === null ? styleImg : {}}
                     src={userProfile.photos.large === null ? icon : userProfile.photos.large}
                     alt=""
                />
            }
        </div>
    </div>
  );
};
