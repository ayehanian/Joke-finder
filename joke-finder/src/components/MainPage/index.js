import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FindPanel from "../FindPanel";
import Grid from "@material-ui/core/Grid";
import FavouritesPanel from "../FavouritesPanel";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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
        <div>
            <div className={classes.root}>
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
            </div>
        </div>
    );
};

export default MainPage;