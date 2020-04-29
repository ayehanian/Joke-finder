import {createMuiTheme} from '@material-ui/core/styles';


const theme = createMuiTheme({

    // breakpoints: {
    //   keys: [
    //     "xs",
    //     "sm",
    //     "md",
    //     "lg",
    //     "xl"],
    //   values: {
    //     xs: 0,
    //     sm: 600,
    //     md: 960,
    //     lg: 1280,
    //     xl: 1920,
    //   },
    // },
    palette: {
        primary: {
            main: "#ABABAB", // main theme grey color
            light: "#F8F8F8", // light grey color for backgrounds
            dark: "#333333",
            favourite: "#FF6767", // pink color
        },
    },
    spacing: 8,

    typography: {

        fontSize: 18,
        lineHeight: 26,

        h2: {
            fontSize: 32,
            fontWeight: "bold",
            lineHeight: 44,
            color: "#333333"
        },
        h3: {
            fontSize: 24,
            fontWeight: 500,
            lineHeight: 44,
            color: "#333333"
        }
    },

    overrides: {

        MuiButton: {
            root: {
                fontSize: "13px",
                fontWeight: 600,
            },
            text: {
                border: "2px solid #F8F8F8",
// box-sizing: border-box;
                borderRadius: "6px",
                textTransform: "uppercase",
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "16px",
                letterSpacing: "2px",
                "&:hover": {
                    color: "black",
                    backgroundColor: "#F8F8F8",
                },
            },
            contained: {
                background: "linear-gradient(92.01deg, #8EA7FF 0%, #7291FF 100%)",
                borderRadius: "10px",
                width: "152px",
                height: "42px",
                fontWeight: "bold",
                fontSize: "16px",
                color: "#FFFFFF",


                "&:hover": {

                },
            },

        },

        MuiIconButton: {
            root: {
                "&:hover": {
                    // backgroundColor: lightGreen[100],
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
