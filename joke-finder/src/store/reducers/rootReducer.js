import {combineReducers} from "redux";

import searchReducer from "./searchReducer";
import favouritesReducer from "./favouritesReducer";


const rootReducer = combineReducers({
    searchReducer,
    favouritesReducer,
});

export default rootReducer;
