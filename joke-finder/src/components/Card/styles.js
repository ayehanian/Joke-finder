import {makeStyles} from "@material-ui/core/styles";

const Styles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
        marginTop: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
    },

    content: {
        display: "flex",
        padding: theme.spacing(0, 1, 1),
    },

    text: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },

    heartBtn: {
        alignSelf: "flex-end",
    },

    heartIcon: {
        color: theme.palette.primary.favourite
    },

    chatBtn: {
        color: theme.palette.primary.main,
        marginRight: theme.spacing(2),
        '&$disabled': {
            backgroundColor: theme.palette.primary.light
        },
    },
    chatDarkBtn: {
        color: theme.palette.primary.main,
        marginRight: theme.spacing(2),
        '&$disabled': {
            backgroundColor: "#FFFFFF"
        },
    },
    disabled: {},

    categoryBox: {
        display: "inline-block",
        padding: theme.spacing(0.6, 2),
        marginTop: theme.spacing(1),
        borderRadius: "6px",
        backgroundColor: "#FFFFFF",
        letterSpacing: "2px",
        textTransform: "uppercase",
        [theme.breakpoints.up("sm")]: {
            marginTop: 0,
        },
    },

    greyBackgroundColor: {
        backgroundColor: theme.palette.primary.light
    },

    fav: {
        backgroundColor: theme.palette.primary.favourite
    },

    jokeValue: {
        padding: "5px 0 28px"
    },

    idLink: {
        color: "#8EA7FF",
        textDecoration: "underline",
        marginLeft: theme.spacing(0.25),
    },

    idLinkIcon: {
        fontSize: theme.spacing(1),
        marginLeft: theme.spacing(0.5),
    },

    cardFooter: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "self-start",

        [theme.breakpoints.up("sm")]: {
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
    },
}));

export default Styles;