import {makeStyles} from "@material-ui/core/styles";

const Styles = makeStyles((theme) => ({

    root: {
        padding: theme.spacing(0, 2, 2),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(0, 4, 4),
        },
    },

    sideMenuTitle: {
        fontSize: theme.spacing(2),
        paddingTop: theme.spacing(4),
    },

    emptyStub: {
        height: "100wh",
        padding: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    list: {
        width: "100vw",
        overscrollBehaviorY: "contain",
        [theme.breakpoints.up("sm")]: {
            width: "480px",
        },
    },

    sideMenuHeader: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },

    sideMenuHeaderPadding: {
        padding: theme.spacing(2, 2, 0),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(4, 4, 0),
        },
    },

    sideMenuTitleMob: {
        fontSize: theme.spacing(2),
        paddingLeft: theme.spacing(1),
    },

    toggleBtn: {
        backgroundColor: "#333333",
        color: "#FFFFFF",
    },
}));

export default Styles;