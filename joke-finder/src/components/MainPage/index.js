import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FindPanel from "../FindPanel";

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
    return (
        <div>
            <Typography component="h3" className={classes.text}>MSI 2020</Typography>
            <FindPanel/>
        </div>
    );
};

export default MainPage;