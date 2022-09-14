import React from 'react';
import styled from 'styled-components'

interface DividerProps {
    orientation?: "horizontal" | "vertical";
    children?: React.ReactNode | string;
    className?: string;
    id?: string;
    alignItems?: "start" | "center" | "end";
    mt?: number; mb?: number; ml?: number; mr?: number; m?: number; 
}

const StyledDivider = styled.div.attrs<DividerProps>(p => ({
    mt: p.mt || p.m || 0,
    mb: p.mb || p.m || 0,
    mr: p.mr || p.m || 0,
    ml: p.ml || p.m || 0,
}))<DividerProps>
`
    color: ${p => p.theme.palette.text.disabled};
    position: relative;
    font-family: ${p => p.theme.typography.caption.fontFamily};
    font-size: ${p => p.theme.typography.caption.fontSize};
    font-weight: ${p => p.theme.typography.caption.fontWeight};
    letter-spacing: ${p => p.theme.typography.caption.letterSpacing};
    line-height: ${p => p.theme.typography.caption.lineHeight};

    margin: ${p => p.mt}rem ${p => p.mr}rem ${p => p.mb}rem ${p => p.ml}rem;

    &.horizontal {
        width: 100%;
        display: flex;
        align-items: center;

        &.start {
            &::before {
                position: relative;
                text-align: start;
                width: 20%;
                content: '';
                height: 0.1rem;
                background-color: ${p => p.theme.palette.text.disabled};
            }
            &::after {
                position: relative;
                text-align: end;
                width: 80%;
                content: '';
                height: 0.1rem;
                background-color: ${p => p.theme.palette.text.disabled};
            }  
        }
        &.center {
            &::before {
                position: relative;
                text-align: start;
                width: 50%;
                content: '';
                height: 0.1rem;
                background-color: ${p => p.theme.palette.text.disabled};
            }
            &::after {
                position: relative;
                text-align: end;
                width: 50%;
                content: '';
                height: 0.1rem;
                background-color: ${p => p.theme.palette.text.disabled};
            }  
        }
        &.end {
            &::before {
                position: relative;
                text-align: start;
                width: 80%;
                content: '';
                height: 0.1rem;
                background-color: ${p => p.theme.palette.text.disabled};
            }
            &::after {
                position: relative;
                text-align: end;
                width: 20%;
                content: '';
                height: 0.1rem;
                background-color: ${p => p.theme.palette.text.disabled};
            }  
        }
    }
    &.vertical {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &.start {
            &::before {
                position: relative;
                text-align: start;
                height: 20%;
                content: '';
                width: 0.1rem;
                background-color: ${p => p.theme.palette.text.disabled};
            }
            &::after {
                position: relative;
                text-align: end;
                height: 80%;
                content: '';
                width: 0.1rem;
                background-color: ${p => p.theme.palette.text.disabled};
            }  
        }
        &.center {
            &::before {
                position: relative;
                text-align: start;
                height: 50%;
                content: '';
                width: 0.1rem;
                background-color: ${p => p.theme.palette.text.disabled};
            }
            &::after {
                position: relative;
                text-align: end;
                height: 50%;
                content: '';
                width: 0.1rem;
                background-color: ${p => p.theme.palette.text.disabled};
            }  
        }
        &.end {
            &::before {
                position: relative;
                text-align: start;
                height: 80%;
                content: '';
                width: 0.1rem;
                background-color: ${p => p.theme.palette.text.disabled};
            }
            &::after {
                position: relative;
                text-align: end;
                height: 20%;
                content: '';
                width: 0.1rem;
                background-color: ${p => p.theme.palette.text.disabled};
            } 
        }
    }
`

const StyledDividerContent = styled.span
`
    padding: 0.625rem;
`

export const Divider = React.forwardRef((props:DividerProps, ref:any) => {

    const {
        children,
        className,
        id,
        orientation = "horizontal",
        alignItems = "center",
        mt, mr, mb, ml, m
    } = props

    const cName = [className, id, orientation, alignItems].join(' ').trim()

    return (
    <StyledDivider
        role="separator"
        ref={ref}
        id={id}
        mt={mt} mr={mr} mb={mb} ml={ml} m={m}
        className={cName}
    >
    { children && <StyledDividerContent>{children}</StyledDividerContent> }
    </StyledDivider>
    )

})

Divider.displayName = 'Divider'