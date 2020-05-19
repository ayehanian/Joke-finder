import React from "react";
import {Provider} from "react-redux";

import configureStore from 'redux-mock-store';

import {ThemeProvider} from "@material-ui/core/styles";
import theme from "../../theme";

import Timer from "./index";


const mockStore = configureStore();

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

const time = "2020-01-05 13:42:25.628594";

let store, component;

beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    component = mount(
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Timer updated={time}/>
            </Provider>
        </ThemeProvider>)
});

describe( '<Timer /> rendering', () => {

    it('Should render Timer and receive string', () => {
        expect(component.find(Timer)).toHaveLength(1);
        expect(component.find(Timer).prop("updated")).toEqual(expect.any(String));
    });
});

