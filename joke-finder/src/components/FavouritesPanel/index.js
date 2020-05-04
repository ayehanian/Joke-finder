import React from "react";
import JokeCard from "../Card";
import {connect} from "react-redux";


const FavouritesPanel = ({favourites}) => {

    return (
        <div style={{border: "2px solid black"}}>
            {favourites.map(item => {
                return <JokeCard jokeInfo={item}/>
            })}
        </div>
    );
};

function mapStateToProps(state) {
    return {
        favourites: state.favouritesReducer.favourites,
    };
}

export default connect(mapStateToProps)(FavouritesPanel);
