import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./reducers/profilePageReducer";
import {dialogPageReducer} from "./reducers/dialogPageReducer";
import {usersPageReducer} from "./reducers/usersPageReducer";

const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    usersPage: usersPageReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);


// @ts-ignore
window.store = store;