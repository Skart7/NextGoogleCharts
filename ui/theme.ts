import React from 'react'
import {DefaultTheme} from 'styled-components'

const zIndexSchema = {
    modal: 1300,
    fab: 1050,
    appBar: 1100,
    drawer: 1200,
    snackbar: 1400,
    tooltip: 1500,
    speedDial: 1050
}
const typographySchema = {
    fontFamily: "'Open Sans', sans-serif",
        h1: {
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "2.6rem",
            fontWeight: 500,
            letterSpacing: "0em",
            lineHeight: 1.167,
        },
        h2: {
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "2.25rem",
            fontWeight: 500,
            letterSpacing: "0em",
            lineHeight: 1.2,
        },
        h3: {
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "2rem",
            fontWeight: 500,
            letterSpacing: "0em",
            lineHeight: 1.167,
        },
        h4: {
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "1.75rem",
            fontWeight: 500,
            letterSpacing: "0.0073em",
            lineHeight: 1.235,
        },
        h5: {
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "1.25rem",
            fontWeight: 500,
            letterSpacing: "0em",
            lineHeight: 1.334,
        },
        h6: {
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "1.1rem",
            fontWeight: 500,
            letterSpacing: "0.0075em",
            lineHeight: 1.6,
        },
        body1: {
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "1rem",
            fontWeight: 400,
            letterSpacing: "0.00938em",
            lineHeight: 1.5,
        },
        body2: {
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "0.875rem",
            fontWeight: 400,
            letterSpacing: "0.01071em",
            lineHeight: 1.43,
        },
        caption: {
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 400,
            letterSpacing: "0.02em",
            lineHeight: 1.66,
        },
        button: {
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "0.95rem",
            fontWeight: 600,
            letterSpacing: "0.02em",
            lineHeight: 1.75,
            textTransform: "uppercase",
        }
}
const shapeSchema = {
    borderRadius: "0.35rem"
}
const containerSchema = {
    xs: "0",
    sm: "600px",
    md: "900px",
    lg: "1200px",
    xl: "1500px"
}
const transitionSchema = {
    defaultAction: 'all .15s linear', // hover | focus | active
    toggleAction: 'all .3s linear', // open | close
}

const colorSchemaForDarkTheme = {
    primary: { main: "#673ab7", contrastText: "#dad6dd", action: "rgba(101, 31, 255, 0.15)" },
    secondary: { main: "#651fff", contrastText: "#dad6dd", action: "rgba(101, 31, 255, 0.15)" },
    success: { main: "#4caf50", contrastText: "#dad6dd", action: "rgba(76, 175, 80, 0.15)" },
    error: { main: "#f44336", contrastText: "#dad6dd", action: "rgba(244, 67, 54, 0.15)" },
    info: { main: "#3f51b5", contrastText: "#dad6dd", action: "rgba(63, 81, 181, 0.15)"},
    warning: { main: "#ffc107", contrastText: "#121212", action: "rgba(55, 193, 7, 0.15)" },
    text: { main: "#dad6dd", disabled: "#f6f6f629", caption: "#807d82" },
    background: { paper: "#282935", default: "#1d1e26" }
}
const colorSchemaForLightTheme = {
    primary: { main: "#673ab7", contrastText: "#fff", action: "rgba(101,31,255,0.15)"  },
    secondary: { main: "#561cba", contrastText: "#fff", action: "rgba(86,28,186, 0.15)"  },
    success: { main: "#357a38", contrastText: "#fff", action:"rgba(76, 175, 80, 0.15)" },
    error: { main: "#aa2e25", contrastText: "#fff", action: "rgba(244, 67, 54, 0.15)" },
    info: { main: "#2c387e", contrastText: "#fff", action: "rgba(63, 81, 181, 0.15)" },
    warning: { main: "#b28704", contrastText: "#fff", action: "rgba(55, 193, 7, 0.15)" },
    text: { main: "#121212", disabled: "#5b5656", caption: "#5b5656" },
    background: { paper: "#dedae8", default: "#c7bfdf" }
}

export const darkTheme:DefaultTheme = {
    palette: colorSchemaForDarkTheme,
    container: containerSchema,
    shape: shapeSchema,
    typography: typographySchema,
    zIndex: zIndexSchema,
    transition: transitionSchema
}
export const lightTheme:DefaultTheme = {
    palette: colorSchemaForLightTheme,
    container: containerSchema,
    shape: shapeSchema,
    typography: typographySchema,
    zIndex: zIndexSchema,
    transition: transitionSchema
}

export const useTheme = (mode:string) => {

    const theme = React.useCallback(() => {
        switch(mode) {
            case 'dark':
                return darkTheme
            case 'light':
                return lightTheme
            default:
                return darkTheme 
        }
    },[mode])

    return theme
}