import 'styled-components'

interface paletteProps {
    primary: { main: string, contrastText: string, action: string },
    secondary: { main: string, contrastText: string, action: string },
    success: { main: string, contrastText: string, action: string },
    error: { main: string, contrastText: string, action: string },
    info: { main: string, contrastText: string, action: string },
    warning: { main: string, contrastText: string, action: string },
    text: { main: string, disabled: string, caption: string },
    background: { paper: string, default: string }
}
interface containerProps {
    xs: string;
    sm: string; 
    md: string;
    lg: string;
    xl: string;
}
interface shapeProps {
    borderRadius: string
}
interface typographyProps {
    fontFamily: string,
    h1: {
        fontFamily: string,
        fontSize: string,
        fontWeight: number | string,
        letterSpacing: number | string,
        lineHeight: number,
    },
    h2: {
        fontFamily: string,
        fontSize: string,
        fontWeight: number | string,
        letterSpacing: number | string,
        lineHeight: number,
    },
    h3: {
        fontFamily: string,
        fontSize: string,
        fontWeight: number | string,
        letterSpacing: number | string,
        lineHeight: number,
    },
    h4: {
        fontFamily: string,
        fontSize: string,
        fontWeight: number | string,
        letterSpacing: number | string,
        lineHeight: number,
    },
    h5: {
        fontFamily: string,
        fontSize: string,
        fontWeight: number | string,
        letterSpacing: number | string,
        lineHeight: number,
    },
    h6: {
        fontFamily: string,
        fontSize: string,
        fontWeight: number | string,
        letterSpacing: number | string,
        lineHeight: number,
    },
    body1: {
        fontFamily: string,
        fontSize: string,
        fontWeight: number | string,
        letterSpacing: number | string,
        lineHeight: number,
    },
    body2: {
        fontFamily: string,
        fontSize: string,
        fontWeight: number | string,
        letterSpacing: number | string,
        lineHeight: number,
    },
    caption: {
        fontFamily: string,
        fontSize: string,
        fontWeight: number | string,
        letterSpacing: number | string,
        lineHeight: number,
    },
    button: {
        fontFamily: string,
        fontSize: string,
        fontWeight: number | string,
        letterSpacing: number | string,
        lineHeight: number,
        textTransform: string,
    }
}
interface zIndexProps {
    modal: number,
    fab: number,
    appBar: number,
    drawer: number,
    snackbar: number,
    tooltip: number,
    speedDial: number
}
interface transitionProps {
    defaultAction: string;
    toggleAction: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: paletteProps,
        container: containerProps,
        shape: shapeProps,
        typography: typographyProps,
        zIndex: zIndexProps,
        transition: transitionProps
    }
}