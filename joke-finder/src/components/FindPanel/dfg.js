// import React from 'react';
import { shallow } from 'enzyme';
import CircularProgress from "@material-ui/core/CircularProgress";
import JokeCard from "../Card";
import React from "react";

// const Composition = () => (
//     <p>
//         <CircularProgress size={24} />
//     </p>);
//
// describe('<Composition />', () => {
//     it('should render a CircularProgress', () => {
//         const wrapper = shallow(<Composition />);
//         expect(wrapper.find(CircularProgress)).toHaveLength(1);
//     });
// });

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


// it("check the type of value", () => {
//     const props = {
//             jokeInfo: []
//         },
//         CardComponent = mount(<JokeCard {...props} />);
//     expect(CardComponent.prop("jokeInfo")).toBeArr();
// });