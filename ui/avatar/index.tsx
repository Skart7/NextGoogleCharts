import React from 'react';
import styled, { Interpolation } from 'styled-components'

interface AvatarProps {
    size?: "small" | "medium" | "large";
    variant?: "circular" | "rounded";
    color?: "primary" | "secondary";
    children: React.ReactNode;
    className?: string;
    id?: string;
    sx?: Interpolation<React.CSSProperties>;
    mt?: number;
    mb?: number;
    mr?: number;
    ml?: number;
    m?: number;
}

const StyledAvatar = styled.div.attrs<AvatarProps>(p => ({
    mt: p.mt || p.m || 0,
    mb: p.mb || p.m || 0,
    mr: p.mr || p.m || 0,
    ml: p.ml || p.m || 0,
    sx: p.sx
}))<AvatarProps>
`
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-family: ${p => p.theme.typography.fontFamily};
    font-weight: 700;
    margin: ${p => p.mt}rem ${p => p.mr}rem ${p => p.mb}rem ${p => p.ml}rem;

    &.small {
        width: 2.2rem;
        height: 2.2rem;
        font-size: 0.813rem;
    }
    &.medium {
        width: 3rem;
        height: 3rem;
        font-size: 0.9rem;
    }
    &.large {
        width: 4rem;
        height: 4rem;
        font-size: 1rem;
    }

    &.primary {
        background-color: ${p => p.theme.palette.primary.main};
        color: ${p => p.theme.palette.primary.contrastText};
    }
    &.secondary {
        background-color: ${p => p.theme.palette.secondary.main};
        color: ${p => p.theme.palette.secondary.contrastText};
    }

    &.circular {
        border-radius: 50%;
    }
    &.rounded {
        border-radius: ${p => p.theme.shape.borderRadius};
    }

    ${p => p.sx};
`

export const Avatar = React.forwardRef((props:AvatarProps, ref:any) => {

    const {
        children,
        variant="circular",
        size="medium",
        color="primary",
        className,
        id,
        mr,mb,mt,ml,m,sx
    } = props        

    const cName = [className, size, color, variant].join(' ').trim()

    return (
    <StyledAvatar
        className={cName}
        mt={mt} mr={mr} mb={mb} ml={ml} m={m} sx={sx}
        ref={ref}
        id={id}
    >
        {children}
    </StyledAvatar>
    )
})

Avatar.displayName = "Avatar"