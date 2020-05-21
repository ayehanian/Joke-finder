import React from "react";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';

import {ThemeProvider} from "@material-ui/core/styles";
import theme from "../../theme";

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {ValidatorForm} from 'react-material-ui-form-validator';

import FindPanel from "./index";


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
                <FindPanel/>
            </Provider>
        </ThemeProvider>);
});


describe('<FindPanel /> rendering', () => {

    it('should render a Preloader', () => {
        expect(component.find(CircularProgress)).toHaveLength(1);
    });

    it('should render two styled headers', () => {
        expect(component.find(Typography).at(0).prop('variant')).toEqual("h2");
        expect(component.find(Typography).at(1).prop('variant')).toEqual("h3");
    });

    it('should render a form with 3 radio buttons to choose search params', () => {
        expect(component.find(ValidatorForm)).toHaveLength(1);
        expect(component.find(RadioGroup)).toHaveLength(1);
        expect(component.find(FormControlLabel)).toHaveLength(3);
        expect(component.find(FormControlLabel).at(0).prop('value')).toEqual("random");
        expect(component.find(FormControlLabel).at(2).prop('label')).toEqual("Search");
    });

    it('should have proper props for submit btn and it should contain a proper text', () => {
        expect(component.find(Button).props()).toEqual({
            "aria-label": "find",
            children: "Get a joke",
            type: 'submit',
            variant: "contained",
        });
    });

});