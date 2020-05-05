const initialState = {
  chosenCategory: "",
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "CHOSEN_CATEGORY":
      return { ...state, chosenCategory: action.payload };
    default:
      return state;
  }
}

export default searchReducer;
