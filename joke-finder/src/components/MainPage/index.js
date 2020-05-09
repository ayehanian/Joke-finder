import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import FavouritesPanel from "../FavouritesPanel";
import FindPanel from "../FindPanel";
import FavouritesPanelMobile from "../FavouritesPanel/FavPanelMobile";

const useStyles = makeStyles((theme) => ({
    text: {
        fontSize: "20px",
        fontWeight: "bold",
        lineHeight: "28px",
        textTransform: "uppercase",
    },
}));

const MainPage = () => {
    const classes = useStyles();

    const burgerMenuAdaptive = useMediaQuery(theme => theme.breakpoints.down('md'));

    return (
        <>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={8}>
                        <Typography component="h3" className={classes.text}>MSI 2020</Typography>
                        {burgerMenuAdaptive && <FavouritesPanelMobile/>}
                        <FindPanel/>
                    </Grid>
                    {burgerMenuAdaptive ? null : (
                        <Grid item lg={4}>
                            <FavouritesPanel/>
                        </Grid>
                    )}
                </Grid>
        </>
    );
};

export default MainPage;