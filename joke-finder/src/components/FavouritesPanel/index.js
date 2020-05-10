import React from "react";
import {connect} from "react-redux";
import Typography from "@material-ui/core/Typography";

import JokeCard from "../Card";
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.light,
        padding: theme.spacing(0,2),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(0,4),
        },
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(2,4),
        },
    },
    sideMenuTitle: {
        fontSize: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}));


const FavouritesPanel = ({favourites}) => {
    const classes = useStyles();

    const isDesktop = useMediaQuery(theme => theme.breakpoints.up('lg'));

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
            {isDesktop ?  <Typography variant="subtitle1" className={classes.sideMenuTitle}>Favourite</Typography>: null}
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
