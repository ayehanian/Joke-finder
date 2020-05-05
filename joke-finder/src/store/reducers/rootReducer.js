import {combineReducers} from "redux";

import searchReducer from "./searchReducer";
import favouritesReducer from "./favouritesReducer";
import categoriesReducer from "./categoriesReducer";


const rootReducer = combineReducers({
    categoriesReducer,
    searchReducer,
    favouritesReducer,
});

export default rootReducer;
