import React, {useEffect} from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {authType, setAuthDataAC, setAuthingAC} from "../../redux/reducers/authReducer";
import {rootReducerType} from "../../redux/store";
import {authAPI} from "../../api/auth-API";

export const Header = () => {

    const dispatch = useDispatch<Dispatch>();
    const loginName = useSelector<rootReducerType, authType>(state => state.auth)

    useEffect(() => {
        authAPI.authMe()
            .then(res => {
                let {id, email, login} = res.data.data;
                dispatch(setAuthDataAC(email, id, login))
                if(res.data.resultCode === 0 ) {
                    dispatch(setAuthingAC(true))
                }
            })
    }, [])

    return (
        <header  className={s.header}>
            <img src="https://img1.freepng.ru/20180825/ykq/kisspng-clip-art-vector-graphics-openclipart-computer-icon-github-logo-icon-free-of-typicons-5b816c4e65e780.8591620015352085264174.jpg" alt="logo"/>
            <div style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '10px'}}>
                {
                    loginName.isAuthing
                        ? <NavLink to={'/profile'}> {loginName.login} </NavLink>
                        :  <NavLink to={'/login'}><button> Login </button></NavLink>
                }
            </div>
        </header>
    )
}