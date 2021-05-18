import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme();
const { breakpoints } = theme;

export default createMuiTheme({

  palette: {
    primary: {
      main: "#242424",
    },
    secondary: {
      main: "#244f5f",
      light: "#eca725"
    },
    background: {
      default: "#ffffff",
      paper: "#f7f6f5"
    },
    success: {
      main: "#755AB5"
    },
    error: {
      main: "#E25353"
    },
    text: {
      primary: "#404040",
      secondary: "#FFFFFF",
      disabled: "#C2C9CF"
    },
    grey: {
      "100": "#252729",
      "200": "#51575C",
      "400": "#939BA3",
      "600": "#C2C9CF",
      "700": "#DCE2E9",
      "800": "#F7F9FC",
      "900": "#FEFEFF"
    },
    info: {
      main: "#7BD4F0"
    },
    warning: {
      main: "#F6D46C"
    }
  },

  typography: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: 14,
    h1: {
      fontSize: 50,
      fontWeight: 300,
    },
    h2: {
      fontSize: 26,
      fontWeight: 500
    },
    h3: {
      fontSize: 22,
      fontWeight: 600
    },
    h4: {
      fontSize: 18,
      fontWeight: 600
    },
    h5: {
      fontSize: 16,
      fontWeight: 700
    },
    h6: {
      fontSize: 16,
      fontWeight: 500
    },
    button: {
      fontSize: 16,
      fontWeight: 700,
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "::-webkit-scrollbar-track": { },
        "::-webkit-scrollbar": { },
        "::-webkit-scrollbar-thumb": { color: "#000" },
        "p": {
          fontSize: 16
        }
      },
    },

    MuiCard: {
      root: {
        display: "flex",
        flexDirection: "column",
        flex: "1 1 auto",
        borderRadius: 0
      }
    },

    MuiCardActionArea: {
      root: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        flex: "1 1 auto",
        alignItems: "flex-start"
      }
    },

    MuiCardMedia: {
      root: {
        display: "flex",
        width: "100%"
      }
    },

    MuiFormLabel: {
      root: {
        color: "#222"
      }
    },

    MuiCardContent: {
      root: {
        display: "flex",
        flexDirection: "column",
        flex: "1 1 auto",
        justifyContent: "space-between"
      }
    },

    MuiCardActions: {
      root: {
        justifyContent: "center",
        "& button": {
          flex: 1
        }
      }
    },

    MuiCheckbox: {
      root: {
        color: "#244f5f"
      }
    },

    MuiButton: {
      root: {
        borderRadius: 0,
      },
      label: {
        textTransform: "initial"
      },
      text: {
        color: "#000"
      },
      outlined: {
        fontWeight: 700,
        border: "1px solid #000",
        borderRadius: 0,
        color: "#000"
      },
      outlinedPrimary: {
        border: "2px solid #eca725",
        color: "#244f5f",
        "&:hover": {
          border: "2px solid #eca725",
        }
      }
    },

    MuiInputBase: {
      root: {
        fontSize: 16,
        fontWeight: 600,
        color: "#244f5f",
        [breakpoints.up("sm")]: {
          fontSize: 16,
        },
        [breakpoints.up("md")]: {
          fontSize: 16,
        },
        [breakpoints.up("lg")]: {
          fontSize: 16,
        }
      }
    }
  },
  props: {
    MuiButton: {
      variant: "outlined",
    }
  }
});