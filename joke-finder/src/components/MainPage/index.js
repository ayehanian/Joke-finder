import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import FavouritesPanel from "../FavouritesPanel";
import FindPanel from "../FindPanel";
import FavouritesPanelMobile from "../FavouritesPanel/FavPanelMobile";
import {Box} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    pageHeader:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: theme.spacing(2, 2, 0),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(4, 4, 0),
        },
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(4,14,0),
        },
    },
    pageTitle: {
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
                <Grid container>
                    <Grid item xs={12} lg={8}>
                        <Box className={classes.pageHeader}>
                            <Typography component="h3" className={classes.pageTitle}>MSI 2020</Typography>
                            {burgerMenuAdaptive && <FavouritesPanelMobile/>}
                        </Box>
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