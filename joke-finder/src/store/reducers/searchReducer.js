const initialState = {
  searchResult: [],
  error: "",
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_SUCCESS":

      console.log( { ...state, searchResult: action.payload });
      return { ...state, searchResult: action.payload };
    // case "SEARCH_LOADING":
    //   return state;
    case  "SEARCH_FAILURE":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default searchReducer;
