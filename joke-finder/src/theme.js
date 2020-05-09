import {createMuiTheme} from '@material-ui/core/styles';


const theme = createMuiTheme({

    breakpoints: {
        keys: [
            "xs",
            "sm",
            "md",
            "lg",
            "xl"],
        values: {
            xs: 0,
            sm: 600,
            md: 850,
            lg: 1280,
            xl: 1920,
        },
    },

    palette: {
        primary: {
            main: "#ABABAB", // main theme grey color
            light: "#F8F8F8", // light grey color for backgrounds
            dark: "#333333",
            favourite: "#FF6767", // pink color
        },
    },
    spacing: 10,

    // theme.typography.h3 = {
    //     fontSize: '1.2rem',
    //     '@media (min-width:600px)': {
    //         fontSize: '1.5rem',
    //     },
    //     [theme.breakpoints.up('md')]: {
    //         fontSize: '2.4rem',
    //     },
    // };

    typography: {
        // fontSize: 18,
        // textAlign: "start",
        lineHeight: 26,
        color: "#333333",

        h2: {
            fontSize: 32,
            fontWeight: "bold",
            lineHeight: 44,
        },
        h3: {
            fontSize: 24,
            fontWeight: 500,
            lineHeight: 44,
        },
        subtitle1: {
            fontSize: "10px",
            fontWeight: 500,
            lineHeight: "14px",
            color: "#ABABAB",
        },
        body1: {
            textAlign: "start",
            fontSize: "14px",
            padding: "5px 0 20px"
            // lineHeight: "20px",
        },
        body2: {
            textAlign: "start",
            fontSize: "18px",
            padding: "5px 0 28px"
            // lineHeight: "26px",
        },
        overline: {
/*            padding: "6px 20px",
            marginTop: "10px",
            fontSize: "10px",
            fontWeight: 500,
            letterSpacing: "2px",
            textTransform: "uppercase",*/
            // lineHeight: "14px",
            /* or 140% */
            // fontSize: "10px",
            // fontWeight: 500,
            // lineHeight: "14px",
            // /* or 140% */
            // letterSpacing: "2px",
            // color: "#333333",
        }
    },
    // only relies on 300, 400, 500, and 700 font weights.
    overrides: {
        MuiPaper: {
            elevation1: {
                backgroundColor: "#F8F8F8",
                boxShadow: "none",
                borderRadius: "20px",
            },
            outlined: {
                border: "1px solid #F8F8F8",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
            },
        },
        MuiButton: {
            root: {
                fontSize: "13px",
                fontWeight: 700,
            },
/*            text: {
                // border: "2px solid #F8F8F8",
                // // boxSizing: "border-box",
                // color: "#ABABAB",
                // borderRadius: "6px",
                // textTransform: "uppercase",
                // fontSize: "12px",
                // fontWeight: 500,
                // lineHeight: "16px",
                // letterSpacing: "2px",
                '&$hover': {
                    borderColor: "#333333"
                },

                "&:hover": {
                    color: "black",
                    backgroundColor: "#F8F8F8",
                },
            },*/
            contained: {
                background: "linear-gradient(92.01deg, #8EA7FF 0%, #7291FF 100%)",
                borderRadius: "10px",
                width: "152px",
                height: "42px",
                fontWeight: "bold",
                fontSize: "16px",
                color: "#FFFFFF",
                "&:hover": {},
            },

        },
        MuiListItem:{
           root:{
               width: "inherit",
               '&$selected': {
                   backgroundColor: "#F8F8F8",
                   color: "#333333"
               },
           }
        },
        MuiIconButton: {
            root: {
                padding: "10px",
                backgroundColor: "#FFFFFF",
                // "&:hover": {
                //      backgroundColor: lightGreen[100],
                // },
            },
        },
        MuiCardContent: {
            root: {
                "&:last-child": {
                    paddingBottom: "10px",
                },
            },
        },
        MuiFormControlLabel: {
            root: {
                "&:checked": {
                    backgroundColor: "black",
                },
            },
        },

        // MuiFab: {
        //   secondary: {
        //     backgroundColor: lightGreen[700],
        //     "&:hover": {
        //       backgroundColor: lightGreen[900],
        //     },
        //   },
        // },


        MuiExpansionPanelSummary: {
            content: {
                justifyContent: "space-between",
                alignItems: "center",
                margin: 0,
            },
        },
    }
});


export default theme;
