import {makeStyles} from "@material-ui/core/styles";

const Styles = makeStyles((theme) => ({
    container: {
        background: "white",
    },
    pageHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: theme.spacing(2, 2, 0),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(4, 4, 0, 4),
        },
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(4, 14, 0),
        },
    },
    pageTitle: {
        fontSize: "20px",
        fontWeight: "bold",
        lineHeight: "28px",
        textTransform: "uppercase",
    },
    favPanel: {
        backgroundColor: theme.palette.primary.light
    },

}));

export default Styles;
