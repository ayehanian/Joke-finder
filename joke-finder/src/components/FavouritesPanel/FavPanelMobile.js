import React from "react";
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FavouritesPanel from "./index";


const useStyles = makeStyles((theme) => ({
    list: {
        width: "100vw",
        [theme.breakpoints.up("sm")]: {
            width: "480px",
        },
    },
    fullList: {
        width: 'auto',

    },
}));


const FavouritesPanelMobile = () => {
    const classes = useStyles();

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({...state, [anchor]: open});
    };

    const sideList = anchor => (

        <div className={clsx(classes.list, {[classes.fullList]: anchor === 'top' || anchor === 'bottom',})}
             role="presentation"
             onClick={toggleDrawer(anchor, false)}
             onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className={classes.sideMenuHeader}>
                <Typography className={classes.sideMenuTitle}>Favourite</Typography>
                <IconButton
                    color="inherit"
                    aria-label="close drawer"
                    onClick={toggleDrawer(anchor, false)}
                >
                    <CloseIcon/>
                </IconButton>
            </div>
            <FavouritesPanel/>
        </div>
    );

    return (
        <>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer("right", true)}
                href=''
            >
                <MenuIcon/>
            </IconButton>
            <Typography className={classes.sideMenuTitle}>Favourite</Typography>
            <SwipeableDrawer
                anchor="right"
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
                onOpen={toggleDrawer("right", true)}
            >
                {sideList("right")}
            </SwipeableDrawer>
        </>
    );
};

export default FavouritesPanelMobile;
