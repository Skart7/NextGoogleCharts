import styled, { Interpolation } from 'styled-components'
import React from 'react'
import { RippleEffect } from '../system/rippleEffect/center';

interface IconButtonProps {
    className?: string;
    id?: string;
    sx?: Interpolation<React.CSSProperties>;
    mt?: number; mb?: number; ml?: number; mr?: number; m?: number;
    children: React.ReactNode;
    color?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
    onClick?: (e:React.MouseEvent<HTMLButtonElement>) => void;
    variant?: "standard" | "outlined";
}

const StyledIconButton = styled.button.attrs<IconButtonProps>(p => ({
    mt: p.mt || p.m || 0,
    mb: p.mb || p.m || 0,
    mr: p.mr || p.m || 0,
    ml: p.ml || p.m || 0,
    sx: p.sx
}))<IconButtonProps>
`
    position: relative;
    border: 1px solid transparent;
    cursor: pointer;
    border-radius:100%;
    background: none;
    transition: ${p => p.theme.transition.defaultAction};
    margin: ${p => p.mt}rem ${p => p.mr}rem ${p => p.mb}rem ${p => p.ml};
    display: flex;
    justify-content: center;
    align-items: center;

    &.small {
        font-size: 1.2rem;
        padding: 0.325rem;
    }
    &.medium {
        font-size: 1.5rem;
        padding: 0.425rem;
    }
    &.large {
        font-size: 1.7rem;
        padding: 0.6rem;
    }

    &.standard {
        &.primary {
            color: ${p => p.theme.palette.primary.main};

            &:hover, &:focus {
                background-color: ${p => p.theme.palette.primary.action};
            }
            &:disabled {
                color: ${p => p.theme.palette.text.disabled};
            }
        }
        &.secondary {
            color: ${p => p.theme.palette.secondary.main};

            &:hover, &:focus {
                background-color: ${p => p.theme.palette.primary.action};
            }
            &:disabled {
                color: ${p => p.theme.palette.text.disabled};
            }
        }
    }
    &.outlined {
        &.primary {
            color: ${p => p.theme.palette.primary.main};
            border-color: ${p => p.theme.palette.primary.main};

            &:hover, &:focus {
                background-color: ${p => p.theme.palette.primary.action};
            }
            &:disabled {
                color: ${p => p.theme.palette.text.disabled};
                border-color: ${p => p.theme.palette.text.disabled};
            }
        }
        &.secondary {
            color: ${p => p.theme.palette.secondary.main};
            border-color: ${p => p.theme.palette.secondary.main};
            
            &:hover, &:focus {
                background-color: ${p => p.theme.palette.primary.action};
            }
            &:disabled {
                color: ${p => p.theme.palette.text.disabled};
                border-color: ${p => p.theme.palette.text.disabled};
            }
        }
    }

    ${p => p.sx};
`
export const IconButton = React.forwardRef((props:IconButtonProps, ref:any) => {

    const {
        children,
        className,
        id,
        color="primary",
        size="medium",
        variant="standard",
        mt, mr, mb, ml, m, sx,
        onClick
    } = props

    const onKeyDown = (e:any) => {
        switch (e.key) {
            case " ":
            case "SpaceBar":
            case "Enter":
              e.preventDefault()
              onClick && onClick(e)
              break;
            default:
              break;
        }
    }

    const cName = [className, variant, color, size].join(' ').trim()

    return (
    <StyledIconButton 
        mt={mt} mr={mr} mb={mb} ml={ml} m={m}
        ref={ref}
        className={cName}
        id={id}
        onClick={onClick}
        type="button"
        onKeyDown={onKeyDown}
        sx={sx}
    >
        {children}
        <RippleEffect />
    </StyledIconButton>
    )

})

IconButton.displayName = 'IconButton'