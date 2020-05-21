import React from "react";

import {loadState, saveState} from "./localStorage";


describe('Local storage', () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('The empty local storage loading ', () => {
        expect(loadState()).toEqual(undefined)
    });

    it('Adding data to local storage', () => {
        const mockedStore = {categories: [1,2,3]};
        saveState(mockedStore);
        expect(localStorage.state).toMatch(`{"categories":[1,2,3]}`);
        expect(loadState()).toEqual({"categories": [1, 2, 3]})
    });

});