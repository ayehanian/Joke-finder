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
            contained: {
                marginTop: "20px",
                background: "linear-gradient(92.01deg, #8EA7FF 0%, #7291FF 100%)",
                borderRadius: "10px",
                width: "152px",
                height: "42px",
                fontWeight: "bold",
                fontSize: "16px",
                color: "#FFFFFF",
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

        MuiDrawer: {
            paperAnchorRight: {
                backgroundColor: "#F8F8F8",
            }
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

        MuiInput: {
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