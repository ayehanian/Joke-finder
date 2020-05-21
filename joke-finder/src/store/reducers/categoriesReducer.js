const initialState = {
    isLoading: false,
    categories: [],
    chosenCategory: "",
    error: "",
};


const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATEGORIES":
            return {...state, isLoading: true, error: "" };
        case "GET_CATEGORIES_SUCCESS":
            return {...state, categories: action.payload, isLoading: false, error: ""};
        case "GET_CATEGORIES_FAILURE":
            return {...state, error: action.payload, isLoading: false};
        case "CHOSEN_CATEGORY":
            return {...state, chosenCategory: action.payload};
        default:
            return state;
    }
};

export default categoriesReducer;
