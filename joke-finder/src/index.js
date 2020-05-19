import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from 'react-redux';

import rootReducer from "./store/reducers/rootReducer";
import {loadState, saveState} from "./store/localStorage";

import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./theme";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const persistedState = loadState();

const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk),
);

store.subscribe(() => {
    saveState({favouritesReducer: store.getState().favouritesReducer});
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App/>
        </Provider>
    </ThemeProvider>,
    document.getElementById("root")
);


serviceWorker.unregister();
