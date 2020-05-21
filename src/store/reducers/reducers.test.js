import React from 'react';
import favouritesReducer from "./favouritesReducer";
import categoriesReducer from "./categoriesReducer";


describe('Favourites reducer', () => {

    const initialState = {favourites: [],};
    const objToAdd = {id: "ntoadBdBS0", value: "Chuck Norris joke"};

    it('Favourites reducer should return the initial state', () => {
        expect(favouritesReducer(undefined, {})).toEqual(initialState)
    });

    it('should delete from favourites', () => {
        const state = {favourites: [{id: "ntoadBdBS0", value: "Chuck Norris joke"}],};
        const newState = favouritesReducer(state, {
            type: 'DELETE_FROM_FAV_SUCCESS',
            payload: objToAdd,
        });
        expect(newState).toEqual({favourites: [],});
    });

    it('should return state when trying to delete smth nonexistent', () => {
        const state = {favourites: [],};
        const newState = favouritesReducer(state, {
            type: 'DELETE_FROM_FAV_SUCCESS',
            payload: objToAdd,
        });
        expect(newState).toEqual({favourites: [],});
    });

    it('should add to favourites', () => {
        const newState = favouritesReducer(initialState, {
            type: 'ADD_TO_FAV_SUCCESS',
            payload: objToAdd,
        });
        expect(newState).toEqual({favourites: [{id: "ntoadBdBS0", value: "Chuck Norris joke"}],});
    });

});

describe('Categories reducer', () => {

    const initialState = {
        isLoading: false,
        categories: [],
        chosenCategory: "",
        error: "",
    };

    it('Categories reducer should return the initial state', () => {
        expect(categoriesReducer(undefined, {})).toEqual(initialState)
    });

    it('GET_CATEGORIES', () => {
        const action = {
            type: "GET_CATEGORIES",
        };
        expect(categoriesReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true,
        })
    });

    it('GET_CATEGORIES after error', () => {
        const initialStateWithError = {
            isLoading: false,
            error: "Unknown error",
        };
        const action = {
            type: "GET_CATEGORIES",
        };
        expect(categoriesReducer(initialStateWithError, action)).toEqual({
            ...initialStateWithError,
            isLoading: true,
            error: "",
        })
    });

    it('GET_CATEGORIES_SUCCESS', () => {
        const initialState = {
            isLoading: true,
            categories: [],
            error: "Some error",
        };
        const action = {
            type: "GET_CATEGORIES_SUCCESS",
            payload: [1, 2, 3],
        };

        expect(categoriesReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: false,
            categories: action.payload,
            error: "",
        })
    });

    it('GET_CATEGORIES_FAILURE', () => {
        const initialState = {
            isLoading: true,
            error: "",
        };
        const action = {
            type: "GET_CATEGORIES_FAILURE",
            payload: "Some error",
        };
        expect(categoriesReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: false,
            error: "Some error",
        })
    });

    it('CHOSEN_CATEGORY', () => {
        const initialState = {
            isLoading: false,
            categories: ["movie", "cats", "dogs"],
            chosenCategory: "",
            error: "",
        };
        const action = {
            type: "CHOSEN_CATEGORY",
            payload: "movie",
        };
        expect(categoriesReducer(initialState, action)).toEqual({
            ...initialState,
            chosenCategory: "movie",
        })
    });

});