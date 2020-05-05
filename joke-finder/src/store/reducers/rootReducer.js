import {combineReducers} from "redux";

import favouritesReducer from "./favouritesReducer";
import categoriesReducer from "./categoriesReducer";


const rootReducer = combineReducers({
    categoriesReducer,
    favouritesReducer,
});

export default rootReducer;
