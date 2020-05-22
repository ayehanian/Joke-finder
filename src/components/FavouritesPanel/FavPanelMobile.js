import React, {useState} from "react";

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DragHandleRoundedIcon from '@material-ui/icons/DragHandleRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Box from "@material-ui/core/Box";

import FavouritesPanel from "./index";
import Styles from "./styles";


const FavouritesPanelMobile = () => {
    const classes = Styles();

    const [state, setState] = useState({right: false,});

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({...state, [anchor]: open});
    };

    const sideList = anchor => (
        <div className={classes.list} role="presentation">
            <div className={`${classes.sideMenuHeader} ${classes.sideMenuHeaderPadding}`}>
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
                    className={classes.sideMenuTitleMob}
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
                className={classes.sideMenuTitleMob}
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
