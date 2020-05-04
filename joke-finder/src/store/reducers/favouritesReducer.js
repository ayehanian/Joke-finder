const initialState = {
    favourites: [],
};

function favouritesReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TO_FAV_SUCCESS":
            const extendedArr = [...state.favourites, action.payload];
            return {...state, favourites: extendedArr};
        case  "DELETE_FROM_FAV_SUCCESS":
            const index = state.favourites.findIndex((element) => element.id === action.payload.id);
            if(index===-1){
              return state;
            }else {
              const reducedArr = [...state.favourites.slice(0, index), ...state.favourites.slice(index + 1)];
              return {...state, favourites: reducedArr,};
            }
        default:
            return state;
    }
}


export default favouritesReducer;
