import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Routes, Route, Navigate} from "react-router-dom";
import {UsersContainer} from "./Components/Users/UsersContainer";

type AppPropsType = {

}


export function App(props: AppPropsType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/profile'} />}/>
                    <Route path='/profile' element={<Profile />}/>
                    <Route path='/dialogs' element={<Dialogs />}/>
                    <Route path='/users' element={<UsersContainer />}/>
                </Routes>
            </div>
        </div>
    )
}

