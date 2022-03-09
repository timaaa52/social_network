import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./reducers/profilePageReducer";
import {dialogPageReducer} from "./reducers/dialogPageReducer";
import {usersReducer} from "./reducers/usersReducer";

const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    usersPage: usersReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);


// @ts-ignore
window.store = store;