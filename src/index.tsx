import React from 'react';
import {store} from './redux/store'
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
// import state, {StateType} from "./redux/state";
import {Provider} from "react-redux";

// export const rerenderEntireTree = (state: StateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
// };
// rerenderEntireTree(state.getState());
// store.subscribe(() => {
//     let store = state.getState();
//     rerenderEntireTree(store);
// });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
