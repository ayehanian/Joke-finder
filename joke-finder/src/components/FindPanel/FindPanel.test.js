import React from "react";
import {Provider} from "react-redux";

import configureStore from 'redux-mock-store';

import {ThemeProvider} from "@material-ui/core/styles";
import theme from "../../theme";

import FindPanel from "./index";
import RadioGroup from '@material-ui/core/RadioGroup';
import IconButton from "@material-ui/core/IconButton";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {deleteFromFavourites} from "../../store/actions/Favourites";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Radio from '@material-ui/core/Radio';
import thunk from "redux-thunk";



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

    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState]);

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render a form with 3 radio buttons to choose search params', () => {
        expect(component.find(ValidatorForm)).toHaveLength(1);
        expect(component.find(RadioGroup)).toHaveLength(1);
        expect(component.find(FormControlLabel)).toHaveLength(3);
        expect(component.find(FormControlLabel).at(0).prop('value')).toEqual("random");
        expect(component.find(FormControlLabel).at(2).prop('label')).toEqual("Search");
    });

    it('should be random', () => {
        // console.log((component.find(FormControlLabel).at(0).props()));
        /*
                component.find(FormControlLabel).at(2).simulate('change', {
                    target: {
                        value: 'search',
                    },
                });
                // component.find(RadioGroup).simulate('change');
                expect(setState).toHaveBeenCalledWith(1);
                // searchJokeParam*/
    });
    // it('should have proper props for search field', () => {
    //     expect(component.find(TextValidator).props()).toEqual({
    //         onChange: expect.any(Function),
    //         placeholder: 'Free text search...',
    //         type: 'email',
    //         autoFocus: true,
    //     });
    // })

    // it('should render a focused input', () => {
    //     expect(component.find(TextValidator) ).toHaveLength(1);
    //     expect(component.find(TextValidator).prop('autoFocus')).toEqual(true);
    // });

    //'aria-label': 'search'
    // expect(component.find(IconButton).at(0).prop('aria-label')).toEqual("Favorite Icon");


});

describe('<FindPanel /> interactions', () => {

    it('should call the mock login function when the form is submitted', () => {
        // const mockedSearch = jest.fn();
        //         // component.instance().search = mockedSearch;

        //     expect(component.find(TextValidator) ).toHaveLength(1);
        //     expect(component.find(TextValidator).prop('autoFocus')).toEqual(true);
        // expect(component.find(ValidatorForm)).simulate("submit")
        // expect(mockedSearch).toHaveBeenCalledTimes(1);

        //         wrapper.find('#loginForm').simulate(
        //             'submit',
        //             {preventDefault() {}}
        //         )
        //         expect(mockLoginfn.mock.calls.length).toBe(1)
    })


    // it('should dispatch an action on button click', () => {
    //     component.find(IconButton).at(0).simulate('click');
    //     expect(store.dispatch).toHaveBeenCalledTimes(1);
    //     expect(store.dispatch).toHaveBeenCalledWith(
    //         deleteFromFavourites({
    //             categories: [],
    //             created_at: "2020-01-05 13:42:25.628594",
    //             id: "ntoadBdBS0-huClGnTnBEQ",
    //             updated_at: "2020-01-05 13:42:25.628594",
    //             url: "https://api.chucknorris.io/jokes/ntoadBdBS0-huClGnTnBEQ",
    //             value: "Chuck Norris ALWAYS has a gun in his pocket",
    //         })
    //     );
    // });

    // // fill in email field with blah@gmail.com
// wrapper.find('#email').simulate(
//     'change',
//     {target:
//             {name: 'email', value: 'blah@gmail.com'}
//     }
// )
// it('should change the state commentText and currentlength when the onChange function of the TextField is invoked', () => {
//     wrapper.find(TextField).simulate('change',
//         { target: { value: 'New Comment' } }
//     );
//     expect(wrapper.state('commentText')).toEqual('New Comment');
//     expect(wrapper.state('currentLength')).toEqual('New Comment'.length);
// });


// VALIDATION
// it('should show no error when first entered', () => {
//     expect(wrapper.find(TextField).at(0).props().error).toBe(
//         false);
//     expect(wrapper.find(TextField).at(0).props().helperText).toBe(
//         null);
// });
//
// it('should show error when nothing entered', () => {
//     act(() => {
//         wrapper.find(TextField).at(0).simulate('blur', {target: {value: '123'}});
//     });
//     wrapper.update();
//     expect(wrapper.find(TextField).at(0).props().error).toBe(
//         true);
//     expect(wrapper.find(TextField).at(0).props().helperText).toBe(
//         "Wrong Name format.");
// });
//
// it('should show no error when correctly entered', () => {
//     act(() => {
//         wrapper.find(TextField).at(0).simulate('blur', {target: {value: 'James'}});
//     });
//     wrapper.update();
//     expect(wrapper.find(TextField).at(0).props().error).toBe(
//         false);
//     expect(wrapper.find(TextField).at(0).props().helperText).toBe(
//         null);
// });
// it('should show error when entered', ()=>{
//     wrapper.find('#name').simulate('change', {target: {value: '123'}});
//     expect(wrapper.find("#name").props().error).toBe(
//         true);
//     expect(wrapper.find("#name").props().helperText).toBe(
//         'Wrong Name format.');
// });

});
describe('<FindPanel /> lifecycle method invocations', () => {
    // it('should change the state componentState componentDidMount method is invoked', () => {
    //     expect(wrapper.state('componentState')).toEqual('mounted');
    // });
});


// https://gist.github.com/a-h/21df0f432ae02a6dfed941debb0e5950


// describe('When the form is submitted', () => {
//     it('should call the mock login function', () => {
//         wrapper.find('#loginForm').simulate(
//             'submit',
//             {preventDefault() {}}
//         )
//         expect(mockLoginfn.mock.calls.length).toBe(1)
//     })
// })


// it("check the type of value", () => {
//     const props = {
//             jokeInfo: []
//         },
//         CardComponent = mount(<JokeCard {...props} />);
//     expect(CardComponent.prop("jokeInfo")).toBeArr();
// });

// expect(component.find(IconButton).children()).toHaveLength(1);
// expect(wrapper.dive().find(Card)).toHaveLength(1);
