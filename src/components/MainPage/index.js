import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import FavouritesPanel from "../FavouritesPanel";
import FindPanel from "../FindPanel";
import FavouritesPanelMobile from "../FavouritesPanel/FavPanelMobile";
import Styles from "./styles";


const MainPage = () => {
    const classes = Styles();

    const burgerMenuAdaptive = useMediaQuery(theme => theme.breakpoints.down('md'));

    return (
        <>
                <Grid container>
                    <Grid item xs={12} lg={8}>
                        <Box className={classes.pageHeader}>
                            <Typography component="h3" className={classes.pageTitle}>MSI 2020</Typography>
                            {burgerMenuAdaptive && <FavouritesPanelMobile/>}
                        </Box>
                        <FindPanel/>
                    </Grid>
                    {burgerMenuAdaptive ? null : (
                        <Grid item lg={4} className={classes.favPanel}>
                            <FavouritesPanel/>
                        </Grid>
                    )}
                </Grid>
        </>
    );
};

export default MainPage;