import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from "./theme";
import {Provider} from "react-redux";
import {createStore} from 'redux';

import rootReducer from "./store/reducers/rootReducer";
import {loadState} from "./store/localStorage";


const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App/>
            </Provider>
        </ThemeProvider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});