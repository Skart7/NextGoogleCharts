import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        &::-webkit-scrollbar {
          width: 4px;
          height: 4px;
          background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: ${p => p.theme.shape.borderRadius};
          background-color: ${p => p.theme.palette.secondary.action};
          min-height: 24px;
        }
        &::-webkit-scrollbar-thumb:hover {
          background-color: ${p => p.theme.palette.secondary.main};
        }
        &::-webkit-scrollbar-corner {
          background-color: transparent;
        }
        &::selection {
          color: ${p => p.theme.palette.primary.contrastText};
          background-color: ${p => p.theme.palette.primary.action};
        }
    }

    html, body {
        width: 100%;
        background-color: ${p => p.theme.palette.background.default};
        color: ${p => p.theme.palette.text.main};
    }
`