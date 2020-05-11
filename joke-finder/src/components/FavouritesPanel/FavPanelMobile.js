import React from "react";

import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DragHandleRoundedIcon from '@material-ui/icons/DragHandleRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";

import FavouritesPanel from "./index";


const useStyles = makeStyles((theme) => ({
    list: {
        backgroundColor: theme.palette.primary.light,
        width: "100vw",
        [theme.breakpoints.up("sm")]: {
            width: "480px",
        },
    },
    fullList: {
        width: 'auto',
    },
    sideMenuHeader: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    sideMenuHeaderPadding:{
        padding: theme.spacing(2),
    },
    sideMenuTitle: {
        fontSize: theme.spacing(2),
        paddingLeft: theme.spacing(1),
    },
    toggleBtn: {
        backgroundColor: "#333333",
        color: "#FFFFFF",
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
        >
            <div className={classes.sideMenuHeader}>
                <IconButton
                    aria-label="close drawer"
                    size="small"
                    className={classes.toggleBtn}
                    onClick={toggleDrawer(anchor, false)}
                >
                    <CloseRoundedIcon fontSize="small"/>
                </IconButton>
                <Typography
                    variant="subtitle1"
                    className={`${classes.sideMenuTitle} ${classes.sideMenuHeaderPadding}`}
                    onClick={toggleDrawer(anchor, false)}
                >
                    Favourite
                </Typography>
            </div>
            <FavouritesPanel/>
        </div>
    );

    return (
        <Box className={classes.sideMenuHeader}>
            <IconButton
                edge="start"
                aria-label="open drawer"
                size="small"
                className={classes.toggleBtn}
                onClick={toggleDrawer("right", true)}
                href=''
            >
                <DragHandleRoundedIcon fontSize="small"/>
            </IconButton>
            <Typography
                variant="subtitle1"
                className={classes.sideMenuTitle}
                onClick={toggleDrawer("right", true)}
            >
                Favourite
            </Typography>
            <SwipeableDrawer
                anchor="right"
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
                onOpen={toggleDrawer("right", true)}
            >
                {sideList("right")}
            </SwipeableDrawer>
        </Box>
    );
};

export default FavouritesPanelMobile;
