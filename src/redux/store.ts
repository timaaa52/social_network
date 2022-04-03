import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./reducers/profilePageReducer";
import {dialogPageReducer} from "./reducers/dialogPageReducer";
import {usersPageReducer} from "./reducers/usersPageReducer";
import {authReducer} from "./reducers/authReducer";

const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);


// @ts-ignore
window.store = store;