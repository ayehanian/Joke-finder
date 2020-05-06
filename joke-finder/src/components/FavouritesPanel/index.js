import React from "react";
import {connect} from "react-redux";
import Typography from "@material-ui/core/Typography";

import JokeCard from "../Card";

const FavouritesPanel = ({favourites}) => {


    const emptyStub = () => {
        return (
            <>
                <Typography>There is no favourite jokes...</Typography>
                <Typography>Try to choose some!</Typography>
            </>
        )
    };

    return (
        <>
            <Typography>Favourite</Typography>
            {favourites.length === 0 ? emptyStub() :
                favourites.map(item => {
                    return <JokeCard key={item.id} jokeInfo={item}/>
                })
            }
        </>
    );
};

function mapStateToProps(state) {
    return {
        favourites: state.favouritesReducer.favourites,
    };
}

export default connect(mapStateToProps)(FavouritesPanel);
