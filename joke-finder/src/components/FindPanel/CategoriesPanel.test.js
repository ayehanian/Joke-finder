import React from "react";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";

import {ThemeProvider} from "@material-ui/core/styles";
import theme from "../../theme";

import CircularProgress from "@material-ui/core/CircularProgress";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import CategoriesPanel from "./CategoriesPanel";
import {chooseCategory} from "../../store/actions/Categories";


const middleware = [thunk];
const mockStore = configureStore(middleware);
let store, component;
const initialState = {
    categoriesReducer: {
        isLoading: false,
        categories: ["animal", "dev", "music"],
        chosenCategory: "animal",
        error: "",
    },
};

beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();

    component = mount(
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <CategoriesPanel/>
            </Provider>
        </ThemeProvider>)
});

describe('<CategoriesPanel /> connected React-Redux rendering', () => {

    it('should render a Preloader', () => {
        const loadedState = {
            categoriesReducer: {
                isLoading: true,
                categories: ["animal", "dev", "music"],
                chosenCategory: "animal",
                error: "",
            },
        };
        store = mockStore(loadedState);
        store.dispatch = jest.fn();
        component = mount(
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <CategoriesPanel/>
                </Provider>
            </ThemeProvider>);
        expect(component.find(CircularProgress)).toHaveLength(1);
    });

    it('should render the list of categories from store', () => {
        expect(component.find(CategoriesPanel)).toHaveLength(1);
        expect(component.find(List)).toHaveLength(1);
        expect(component.find(ListItem)).toHaveLength(3);
        expect(component.find(ListItem).at(0).text()).toEqual('animal');
    });

    it('should render the chosen category as selected', () => {
        expect(component.find(ListItem).at(0).prop('selected')).toEqual(true);
    });
});

describe('<CategoriesPanel />  interactions', () => {

    it('should dispatch an action on a List Item click', () => {
        component.find(ListItem).at(1).simulate('click');
        expect(store.dispatch).toHaveBeenCalledWith(chooseCategory("dev"));
    });

});
