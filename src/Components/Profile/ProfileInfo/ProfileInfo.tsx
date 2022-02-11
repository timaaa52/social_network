import React from 'react';
import s from './ProfileInfo.module.css'

type ProfileInfoPropsType = {};

export const ProfileInfo = (props: ProfileInfoPropsType) => {
  return (
    <div>
      <div>
        <img src="https://html5css.ru/css/img_fjords.jpg" alt="" />
      </div>
      <div>ava + descr</div>
    </div>
  );
};
