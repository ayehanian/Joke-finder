import React from "react";
import {Provider} from "react-redux";

import configureStore from 'redux-mock-store';

import {ThemeProvider} from "@material-ui/core/styles";
import theme from "../../theme";
import Typography from '@material-ui/core/Typography';

import FavouritesPanel from "./index";
import JokeCard from "../Card";


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

let store, component;

beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    // component = renderer.create(
    //     <ThemeProvider theme={theme}>
    //         <Provider store={store}>
    //             <FavouritesPanel/>
    //         </Provider>
    //     </ThemeProvider>
    // );
    component = mount(
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <FavouritesPanel/>
            </Provider>
        </ThemeProvider>)
});

describe( '<FavouritesPanel /> connected React-Redux rendering', () => {


    it('Should render FavouritesPanel with given state from Redux store', () => {
        expect(component.find(FavouritesPanel)).toHaveLength(1);
        expect(component.find(JokeCard)).toHaveLength(1);
        // expect(component.toJSON()).toMatchSnapshot();
    });

    it('Should render Cards properly styled', () => {
        expect(component.find(Typography).at(2).prop('variant')).toEqual("body2");
    });

    // it('should dispatch an action on button click', () => {
    //     renderer.act(() => {
    //         component.root.findByType('button').props.onClick();
    //     });
    //
    //     expect(store.dispatch).toHaveBeenCalledTimes(1);
    //     expect(store.dispatch).toHaveBeenCalledWith(
    //         myAction({ payload: 'sample text' })
    //     );
    // });

    // describe('When the form is submitted', () => {
    //     it('should call the mock login function', () => {
    //         wrapper.find('#loginForm').simulate(
    //             'submit',
    //             {preventDefault() {}}
    //         )
    //         expect(mockLoginfn.mock.calls.length).toBe(1)
    //     })
    // })



});

