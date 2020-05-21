import PropTypes from "prop-types";

export const addToFavourites = data => {
  return {
    type: "ADD_TO_FAV_SUCCESS",
    payload: data,
  };
};

export const deleteFromFavourites = data => {
  return {
    type: "DELETE_FROM_FAV_SUCCESS",
    payload: data,
  };
};

addToFavourites.propTypes = {
  data: PropTypes.object,
};
deleteFromFavourites.propTypes = {
  data: PropTypes.object,
};
