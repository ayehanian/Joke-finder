import {makeStyles} from "@material-ui/core/styles";

const Styles = makeStyles((theme) => ({

    root: {
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(7.8, 2, 7.1),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(7.8, 4, 7.1),
        },
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(7.8, 14, 14),
        },
    },

    form: {
        textAlign: "start",
        padding: theme.spacing(4.3, 0, 2),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(4.3, 0, 4),
        },
    },

    list: {
        display: "flex",
        flexWrap: "wrap",
    },

    listItem: {
        display: "inline",
        padding: "6px 15px",
        margin: "5px",
        border: "2px solid #F8F8F8",
        borderRadius: "6px",
        color: theme.palette.primary.main,
        textTransform: "uppercase",
        fontSize: "12px",
        fontWeight: 500,
        lineHeight: "16px",
        letterSpacing: "2px",
    },
}));

export default Styles;