import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from "./store/reducers/rootReducer";

import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./theme";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const store = createStore(rootReducer);

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App/>
        </Provider>
    </ThemeProvider>,
    document.getElementById("root")
);


serviceWorker.unregister();





