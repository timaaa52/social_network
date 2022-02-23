import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./reducers/profilePageReducer";
import {dialogPageReducer} from "./reducers/dialogPageReducer";

const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);