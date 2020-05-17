import React from 'react';
import favouritesReducer from "./favouritesReducer";



const objToAdd = { id: "ntoadBdBS0", value: "Chuck Norris joke"};

    describe('Favourites reducer', () => {
        it('should delete from  favourites', () => {
            const state = { favourites: [{ id: "ntoadBdBS0", value: "Chuck Norris joke"}], };
            const newState = favouritesReducer(state, {
                type: 'DELETE_FROM_FAV_SUCCESS',
                payload: objToAdd,
            });
            expect(newState).toEqual({favourites:[],});
        });
        it('should add to favourites', () => {
            const state = { favourites: [], };
            const newState = favouritesReducer(state, {
                type: 'ADD_TO_FAV_SUCCESS',
                payload: objToAdd,
            });
            expect(newState).toEqual({favourites: [{ id: "ntoadBdBS0", value: "Chuck Norris joke"}], });
        });
    });
// it('should reset the error if list is set', () => {
//     const state = { list: [], error: true };
//     const newState = dataReducer(state, {
//         type: 'SET_LIST',
//         list,
//     });
//
//     expect(newState).toEqual({ list, error: null });
// });
//
// it('should set the error', () => {
//     const state = { list: [], error: null };
//     const newState = dataReducer(state, {
//         type: 'SET_ERROR',
//     });
//
//     expect(newState.error).toBeTruthy();
// });

