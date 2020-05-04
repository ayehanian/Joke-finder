import React from "react";
import JokeCard from "../Card";
import {connect} from "react-redux";


const FavouritesPanel = ({favourites}) => {

    return (
        <>
            {favourites.map(item => {
                return <JokeCard jokeInfo={item}/>
            })}
        </>
    );
};

function mapStateToProps(state) {
    return {
        favourites: state.favouritesReducer.favourites,
    };
}

export default connect(mapStateToProps)(FavouritesPanel);
