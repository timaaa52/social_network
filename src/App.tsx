import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import { StateType } from "./redux/state";

type AppPropsType = {
    state: StateType
    addPost: (message: string | undefined) => void
    newPostText: (value: string) => void
}


export function App(props: AppPropsType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/'} element={<Profile
                        profilePage={props.state.profilePage}
                        addPost={props.addPost}
                        newPostText={props.newPostText}
                    />}/>
                    <Route path='/profile' element={<Profile
                        profilePage={props.state.profilePage}
                        addPost={props.addPost}
                        newPostText={props.newPostText}
                    />}/>
                    <Route path='/dialogs/*' element={<Dialogs
                        dialogData={props.state.messagesPage}
                    />}/>
                </Routes>
            </div>
        </div>
    )
}

