import React from "react";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

import configureStore from 'redux-mock-store';
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "../../theme";

import Typography from '@material-ui/core/Typography';
import FavouritesPanel from "./index";
import JokeCard from "../Card";


const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store, component;


describe('<FavouritesPanel /> connected React-Redux rendering', () => {

    const initialState = {
        favouritesReducer: {
            favourites: [{
                categories: [],
                created_at: "2020-01-05 13:42:25.628594",
                id: "ntoadBdBS0-huClGnTnBEQ",
                updated_at: "2020-01-05 13:42:25.628594",
                url: "https://api.chucknorris.io/jokes/ntoadBdBS0-huClGnTnBEQ",
                value: "Chuck Norris ALWAYS has a gun in his pocket",
            }]
        },
    };
    beforeEach(() => {
        store = mockStore(initialState);
        store.dispatch = jest.fn();
        component = mount(
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <FavouritesPanel/>
                </Provider>
            </ThemeProvider>)
    });

    it('Should render FavouritesPanel with given state from Redux store', () => {
        expect(component.find(FavouritesPanel)).toHaveLength(1);
        expect(component.find(JokeCard)).toHaveLength(1);
    });

    it('Should render Cards properly styled', () => {
        expect(component.find(Typography).at(2).prop('variant')).toEqual("body2");
    });

});

describe('Empty <FavouritesPanel /> rendering', () => {
    const emptyInitialState = {
        favouritesReducer: {
            favourites: []
        },
    };
    beforeEach(() => {
        store = mockStore(emptyInitialState);
        store.dispatch = jest.fn();
        component = mount(
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <FavouritesPanel/>
                </Provider>
            </ThemeProvider>);
    });

    it('Should render reserve text if there is no favourites in store', () => {
        expect(component.find(JokeCard)).toHaveLength(0);
        expect(component.find(Typography)).toHaveLength(2);
        expect(component.find(Typography).at(0).text()).toEqual("Oh, there is no favourite jokes...");
    });

});


