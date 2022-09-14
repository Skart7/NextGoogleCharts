import React from 'react';
import styled, { Interpolation } from 'styled-components'

interface AlertProps {
    children: React.ReactNode;
    variant?: "filled" | "text";
    severity?: "success" | "warning" | "error";
    className?: string;
    id?: string;
    mt?: number;
    mb?: number;
    mr?: number;
    ml?: number;
    m?: number;
    sx?: Interpolation<React.CSSProperties>;
}

const StyledAlert = styled.div.attrs<AlertProps>(p => ({
    mt: p.mt || p.m || 0,
    mb: p.mb || p.m || 0,
    mr: p.mr || p.m || 0,
    ml: p.ml || p.m || 0,
    sx: p.sx
}))<AlertProps> 
`
    margin: ${p => p.mt}rem ${p => p.mr}rem ${p => p.mb}rem ${p => p.ml}rem;
    border-radius: ${p => p.theme.shape.borderRadius};
    width: 100%;
    font-weight: ${p => p.theme.typography.body1.fontWeight};
    padding: 0.625rem;
    font-family: ${p => p.theme.typography.body1.fontFamily};
    font-size: ${p => p.theme.typography.body1.fontSize};

    &.text {
        &.success {
            color: ${p => p.theme.palette.success.main};
        }
        &.warning {
            color: ${p => p.theme.palette.warning.main};
        }
        &.error {
            color: ${p => p.theme.palette.error.main};
        }
    }
    &.filled {
        &.success {
            color: ${p => p.theme.palette.success.contrastText};
            background-color: ${p => p.theme.palette.success.main};
        }
        &.warning {
            color: ${p => p.theme.palette.warning.contrastText};
            background-color: ${p => p.theme.palette.warning.main};
        }
        &.error {
            color: ${p => p.theme.palette.error.contrastText};
            background-color: ${p => p.theme.palette.error.main};
        }
    }

    ${p => p.sx};
`

export const Alert = React.forwardRef((props:AlertProps, ref:any) => {
    
    const {
        children,
        variant="text",
        severity="success",
        className,
        id,
        mr,mb,mt,ml,m,sx
    } = props

    const cName = [className, severity, variant].join(' ').trim()

    return (
    <StyledAlert
        ref={ref}
        id={id}
        className={cName}
        mt={mt} mr={mr} mb={mb} ml={ml} m={m} sx={sx}
    >
        {children}
    </StyledAlert>
    )
})

Alert.displayName = "Alert"