import PropTypes from "prop-types";
import {getJokesCategories} from "../../apiEndpoints";


export const chooseCategory = data => {
    return {
        type: "CHOSEN_CATEGORY",
        payload: data,
    };
};

export const getCategories = () => dispatch => {
    dispatch({ type: "GET_CATEGORIES" });
        getJokesCategories()
            .then(resp => {
                dispatch({
                    type: "GET_CATEGORIES_SUCCESS",
                    payload: resp.data,
                });
                const [defaultCategory] = resp.data;
                dispatch({
                    type: "CHOSEN_CATEGORY",
                    payload: defaultCategory,
                });
            })
            .catch(err => {
                dispatch({
                    type: "GET_CATEGORIES_FAILURE",
                    payload: err,
                });
            });
};


chooseCategory.propTypes = {
    data: PropTypes.string,
};
