import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route, Switch} from "react-router-dom";
import {UsersContainer} from "./Components/Users/UsersContainer";

type AppPropsType = {

}


export function App(props: AppPropsType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Switch>

                    <Route path='/profile/:userId?' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/users' component={UsersContainer}/>
                    <Route path='/' component={Profile} />
                </Switch>
            </div>
        </div>
    )
}

