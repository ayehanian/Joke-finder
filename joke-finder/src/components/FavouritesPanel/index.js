import React from "react";
import {connect} from "react-redux";
import Typography from "@material-ui/core/Typography";

import JokeCard from "../Card";
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.light,
        padding: theme.spacing(0,2),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(0,4),
        },
    },
}));


const FavouritesPanel = ({favourites}) => {
    const classes = useStyles();

    const emptyStub = () => {

        return (
            <>
                <Typography>There is no favourite jokes...</Typography>
                <Typography>Try to choose some!</Typography>
            </>
        )
    };

    return (
        <Box className={classes.root}>
            <Typography>Favourite</Typography>
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
