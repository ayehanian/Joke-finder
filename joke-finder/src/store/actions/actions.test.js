import React from "react";
import thunk from "redux-thunk";
import axios from 'axios';
import configureStore from 'redux-mock-store';
import {chooseCategory, getCategories} from "./Categories";
import {addToFavourites, deleteFromFavourites} from "./Favourites";

jest.mock("axios");
afterAll(() => {
    jest.restoreAllMocks();
});

describe('Actions', () => {

    it('Adding to favourites action', () => {
        const expectedAction = {
            type: "ADD_TO_FAV_SUCCESS",
            payload: {id: "ndBdBS0", value: "Chuck Norris joke"},
        };
        expect(addToFavourites(expectedAction.payload)).toEqual(expectedAction);
    });

    it('Deleting from favourites action', () => {
        const expectedAction = {
            type: "DELETE_FROM_FAV_SUCCESS",
            payload: {id: "666666", value: "Scary joke"},
        };
        expect(deleteFromFavourites(expectedAction.payload)).toEqual(expectedAction);
    });

    it('Get categories action', () => {
        const middleware = [thunk];
        const mockStore = configureStore(middleware);
        const initialState = {
            categoriesReducer: {
                isLoading: false,
                categories: [],
                chosenCategory: "",
                error: "",
            },
        };
        const store = mockStore(initialState);
        const expectedActions = [{type: "GET_CATEGORIES"}];
        axios.get.mockResolvedValue({ data: ["animal", "dev", "music"]});

        store.dispatch(getCategories());
        expect(store.getActions()).toEqual(expectedActions);
        expect(axios.get).toHaveBeenCalledTimes(1)
    });

    it('Get categories action with error', () => {
        const middleware = [thunk];
        const mockStore = configureStore(middleware);
        const initialState = {
            categoriesReducer: {
                error: "",
            },
        };
        const store = mockStore(initialState);
        const expectedActions = [{type: "GET_CATEGORIES"}];
        axios.get.mockResolvedValue({ error: "some error"});

        store.dispatch(getCategories());
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('Choose category action', () => {
        const expectedAction = {
            type: "CHOSEN_CATEGORY",
            payload: "animals",
        };
        expect(chooseCategory(expectedAction.payload)).toEqual(expectedAction);
    });

});