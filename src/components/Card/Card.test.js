import React from 'react'
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {deleteFromFavourites} from "../../store/actions/Favourites";

import {ThemeProvider} from '@material-ui/core/styles';
import theme from "../../theme";

import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import JokeCard from './index'
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
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

const createTestProps = props => {
    return {
        jokeInfo: {
            categories: [],
            created_at: "2020-01-05 13:42:25.628594",
            id: "ntoadBdBS0-huClGnTnBEQ",
            updated_at: "2020-01-05 13:42:25.628594",
            url: "https://api.chucknorris.io/jokes/ntoadBdBS0-huClGnTnBEQ",
            value: "Chuck Norris ALWAYS has a gun in his pocket",
        },
        variant: "outlined",
        ...props,
    };
};

let store, props, component;

beforeEach(() => {
    props = createTestProps();
    store = mockStore(initialState);
    store.dispatch = jest.fn();

    component = mount(
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <JokeCard {...props} />
            </Provider>
        </ThemeProvider>)
});

describe('<JokeCard /> rendering', () => {

    it('should render a Card with content', () => {
        expect(component.find(JokeCard)).toHaveLength(1);
    });

    it('should render a <IconButton /> to display is the Card was marked as favourite', () => {
        expect(component.find(IconButton)).toHaveLength(2);
        expect(component.find(IconButton).at(0).prop('aria-label')).toEqual("Favorite Icon");
    });

    it('should render a Message Icon as disabled ', () => {
        expect(component.find(IconButton).at(1).prop('aria-label')).toEqual("Message Icon");
        expect(component.find(IconButton).at(1).prop('disabled')).toEqual(true);
    });

    it('Should render a Card marked as Favourite with state from Redux store', () => {
        expect(component.find(FavoriteIcon)).toHaveLength(1);
    });

});

describe('<JokeCard /> interactions', () => {

    it('should dispatch an action on button click', () => {
        component.find(IconButton).at(0).simulate('click');
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            deleteFromFavourites({
                categories: [],
                created_at: "2020-01-05 13:42:25.628594",
                id: "ntoadBdBS0-huClGnTnBEQ",
                updated_at: "2020-01-05 13:42:25.628594",
                url: "https://api.chucknorris.io/jokes/ntoadBdBS0-huClGnTnBEQ",
                value: "Chuck Norris ALWAYS has a gun in his pocket",
            })
        );
    });
});