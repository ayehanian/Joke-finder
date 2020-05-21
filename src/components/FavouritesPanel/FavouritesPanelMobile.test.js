import React from "react";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

import configureStore from 'redux-mock-store';
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "../../theme";

import FavouritesPanelMobile from "./FavPanelMobile";
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";


const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
    categoriesReducer: {
        chosenCategory: "animal",
    },
};
let store, component;

beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    component = mount(
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <FavouritesPanelMobile/>
            </Provider>
        </ThemeProvider>);
});


describe('<FavouritesPanelMobile /> rendering', () => {

    it('Should render SwipeableDrawer ', () => {
        expect(component.find(SwipeableDrawer)).toHaveLength(1);
    });

    it('Should render the text near the toggle button', () => {
        expect(component.find(Typography).prop('variant')).toEqual("subtitle1");
    });

    it('Should render burger menu btn', () => {
        expect(component.find(IconButton)).toHaveLength(1);
        expect(component.find(IconButton).prop('aria-label')).toEqual("open drawer");
        expect(component.find(IconButton).prop('size')).toEqual("small");
    });

});

