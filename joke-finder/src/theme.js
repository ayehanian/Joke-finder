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
            lg: 1200,
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
        lineHeight: 26,
        color: "#333333",
        textAlign: "left",

        h2: {
            fontSize: "32px",
            fontWeight: "bold",
            lineHeight: "44px",
            textAlign: "left",
        },
        h3: {
            fontSize: "24px",
            fontWeight: 500,
            lineHeight: "44px",
            textAlign: "left",
        },
        subtitle1: {
            fontSize: "10px",
            fontWeight: 500,
            lineHeight: "14px",
            color: "#ABABAB",
        },
        body1: {
            textAlign: "start",
            fontSize: "18px",
        },
        body2: {
            textAlign: "start",
            fontSize: "14px",
            padding: "5px 0 20px"

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
                marginTop: "20px",
                background: "linear-gradient(92.01deg, #8EA7FF 0%, #7291FF 100%)",
                borderRadius: "10px",
                width: "152px",
                height: "42px",
                fontWeight: "bold",
                fontSize: "16px",
                color: "#FFFFFF",
                "&:hover": {
                    // border: "1px solid #333333",
                },
            },

        },
        MuiListItem: {
            root: {
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
            },
            sizeSmall: {
                padding: "4px",
            }
        },

        MuiSvgIcon: {
            fontSizeSmall: {
                width: "20px",
                height: "20px",
            }
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
        MuiInputBase: {
            root: {
                padding: "4px 15px 3px",
                marginTop: "10px",
                border: "2px solid #333333",
                borderRadius: "10px",
                fontSize: "16px",
            },
        },
        MuiInput:{
            underline: {
                "&:before": {
                    borderBottom: "none",
                },
                "&:after": {
                    borderBottom: "none",
                },
            }
        },
        MuiCircularProgress: {
            root: {
                padding: "20px 0",
            }
        }
    }
});


export default theme;
