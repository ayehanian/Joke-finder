import React from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import JokeCard from "../Card";
import Styles from "./styles";


const FavouritesPanel = ({favourites}) => {
    const classes = Styles();

    const isDesktop = useMediaQuery(theme => theme.breakpoints.up('lg'));

    const emptyStub = () => {
        return (
            <Box className={classes.emptyStub}>
                <Typography variant="body1">Oh, there is no favourite jokes...</Typography>
                <Typography variant="body1">Try to choose some!</Typography>
            </Box>
        )
    };

    return (
        <Box className={classes.root}>
            {isDesktop ?
                <Typography variant="subtitle1" className={classes.sideMenuTitle}>Favourite</Typography> : null}
            {favourites.length === 0 ? emptyStub() :
                favourites.map(item => {
                    return <JokeCard key={item.id} jokeInfo={item} variant="outlined"/>
                })
            }
        </Box>
    );
};

function mapStateToProps(state) {
    return {
        favourites: state.favouritesReducer.favourites,
    };
}

export default connect(mapStateToProps)(FavouritesPanel);

FavouritesPanel.propTypes = {
    favourites: PropTypes.array,
};