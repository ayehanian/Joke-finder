export function addToFavourites(data) {
  return {
    type: "ADD_TO_FAV_SUCCESS",
    payload: data,
  };
}

export function deleteFromFavourites(data) {
  return {
    type: "DELETE_FROM_FAV_SUCCESS",
    payload: data,
  };
}