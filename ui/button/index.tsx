import React from 'react'
import styled, { Interpolation } from 'styled-components'
import { RippleEffect } from '../system/rippleEffect/default'

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    onClick?: (e:React.MouseEvent<HTMLButtonElement>) => void;
    color?: "primary" | "secondary" | "warning" | "error" | "success";
    size?: "small" | "medium" | "large";
    variant?: "outlined" | "text" | "contained";
    mt?: number;
    mb?: number;
    mr?: number;
    ml?: number;
    m?: number;  
    iconStart?:React.ReactNode;
    iconEnd?:React.ReactNode;
    buttonProps?:object;
    sx?: Interpolation<React.CSSProperties>;
}

const StyledButton = styled.button.attrs<ButtonProps>(p => ({
    mt: p.mt || p.m || 0,
    mb: p.mb || p.m || 0,
    mr: p.mr || p.m || 0,
    ml: p.ml || p.m || 0,
    color: p.color || 'primary',
    sx: p.sx
}))<ButtonProps>
`
    outline: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 1vh;
    border: 1px solid transparent;
    border-radius: ${p => p.theme.shape.borderRadius};
    text-transform: ${p => p.theme.typography.button.textTransform};
    font-family: ${p => p.theme.typography.button.fontFamily};
    background: none;
    font-weight: ${p => p.theme.typography.button.fontWeight};
    transition: ${p => p.theme.transition.defaultAction};
    margin: ${p => p.mt}rem ${p => p.mr}rem ${p => p.mb}rem ${p => p.ml}rem;

    &.fullWidth {width: 100%;}

    &.small {padding: 0.525rem 0.525rem;font-size: 0.75rem;}
    &.medium {padding: 0.625rem 0.625rem;font-size: 0.8rem;}
    &.large {padding: 0.7rem 0.725rem;font-size: 0.925rem;}

    &.contained {
        &.primary {
            background-color: ${p => p.theme.palette.primary.main};
            color: ${p => p.theme.palette.primary.contrastText};

            &:hover, &:focus {
                background-color: ${p => p.theme.palette.primary.action}   
            }
            &:disabled {
                color: ${p => p.theme.palette.text.main};
                background-color: ${p => p.theme.palette.text.disabled};
            }
        }
        &.secondary {
            background-color: ${p => p.theme.palette.secondary.main};
            color: ${p => p.theme.palette.secondary.contrastText};

            &:hover, &:focus {
                background-color: ${p => p.theme.palette.secondary.action}   
            }
            &:disabled {
                color: ${p => p.theme.palette.text.main};
                background-color: ${p => p.theme.palette.text.disabled};
            }
        }
        &.success {
            background-color: ${p => p.theme.palette.success.main};
            color: ${p => p.theme.palette.success.contrastText};

            &:hover, &:focus {
                background-color: ${p => p.theme.palette.success.action}   
            }
            &:disabled {
                color: ${p => p.theme.palette.text.main};
                background-color: ${p => p.theme.palette.text.disabled};
            }
        }
        &.error {
            background-color: ${p => p.theme.palette.error.main};
            color: ${p => p.theme.palette.error.contrastText};

            &:hover, &:focus {
                background-color: ${p => p.theme.palette.error.action}   
            }
            &:disabled {
                color: ${p => p.theme.palette.text.main};
                background-color: ${p => p.theme.palette.text.disabled};
            }
        }
        &.warning {
            background-color: ${p => p.theme.palette.warning.main};
            color: ${p => p.theme.palette.warning.contrastText};

            &:hover, &:focus {
                background-color: ${p => p.theme.palette.warning.action}   
            }
            &:disabled {
                color: ${p => p.theme.palette.text.main};
                background-color: ${p => p.theme.palette.text.disabled};
            }
        }
        
    }
    &.outlined {
        &.primary {
            border-color: ${p => p.theme.palette.primary.main};
            color: ${p => p.theme.palette.primary.main};
            &:hover, &:focus {
                background-color: ${p => p.theme.palette.primary.action}   
            }
            &:disabled {
                color: ${p => p.theme.palette.text.disabled};
                border-color: ${p => p.theme.palette.text.disabled};
                background: none;
            }
        }
        &.secondary {
            border-color: ${p => p.theme.palette.secondary.main};
            color: ${p => p.theme.palette.secondary.main};
            &:hover, &:focus {
                background-color: ${p => p.theme.palette.secondary.action}   
            }
            &:disabled {
                color: ${p => p.theme.palette.text.disabled};
                border-color: ${p => p.theme.palette.text.disabled};
                background: none;
            }
        }
        &.success {
            border-color: ${p => p.theme.palette.success.main};
            color: ${p => p.theme.palette.success.main};
            &:hover, &:focus {
                background-color: ${p => p.theme.palette.success.action}   
            }
            &:disabled {
                color: ${p => p.theme.palette.text.disabled};
                border-color: ${p => p.theme.palette.text.disabled};
                background: none;
            }
        }
        &.error {
            border-color: ${p => p.theme.palette.error.main};
            color: ${p => p.theme.palette.error.main};
            &:hover, &:focus {
                background-color: ${p => p.theme.palette.error.action}   
            }
            &:disabled {
                color: ${p => p.theme.palette.text.disabled};
                border-color: ${p => p.theme.palette.text.disabled};
                background: none;
            }
        }
        &.warning {
            border-color: ${p => p.theme.palette.warning.main};
            color: ${p => p.theme.palette.warning.main};
            &:hover, &:focus {
                background-color: ${p => p.theme.palette.warning.action}   
            }
            &:disabled {
                color: ${p => p.theme.palette.text.disabled};
                border-color: ${p => p.theme.palette.text.disabled};
                background: none;
            }
        }
    }
    &.text {
        &.primary {
            color: ${p => p.theme.palette.primary.main};

            &:hover, &:focus {
                background-color: ${p => p.theme.palette.primary.action}
            }
            &:disabled {
                color: ${p => p.theme.palette.text.disabled};
                background: none;
            }
        }
        &.secondary {
            color: ${p => p.theme.palette.secondary.main};

            &:hover, &:focus {
                background-color: ${p => p.theme.palette.secondary.action};
            }
            &:disabled {
                color: ${p => p.theme.palette.text.disabled};
                background: none;
            }
        }
        &.success {
            color: ${p => p.theme.palette.success.main};

            &:hover, &:focus {
                background-color: ${p => p.theme.palette.success.action};
            }
            &:disabled {
                color: ${p => p.theme.palette.text.disabled};
                background: none;
            }
        }
        &.error {
            color: ${p => p.theme.palette.error.main};

            &:hover, &:focus {
                background-color: ${p => p.theme.palette.error.action};
            }
            &:disabled {
                color: ${p => p.theme.palette.text.disabled};
                background: none;
            }
        }
        &.warning {
            color: ${p => p.theme.palette.warning.main};

            &:hover, &:focus {
                background-color: ${p => p.theme.palette.warning.action};
            }
            &:disabled {
                color: ${p => p.theme.palette.text.disabled};
                background: none;
            }
        }
    }

    ${p => p.sx};
`

const IconWrap = styled.span
`
    pointer-events: none;
`

export const Button = React.forwardRef((props:ButtonProps, ref:any) => {

    const {
        children, id, className, onClick,
        disabled = false,
        variant="text",
        color="primary",
        size="medium",
        fullWidth,
        mr,mb,mt,ml,m,
        iconStart,iconEnd,buttonProps,sx
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

    const cName = [className, color, size, variant, fullWidth && 'fullWidth'].join(' ').trim()

    return (
    <StyledButton
        onClick={onClick}
        sx={sx}
        onKeyDown={onKeyDown}
        className={cName}
        color={color}
        id={id}
        mt={mt} mr={mr} mb={mb} ml={ml} m={m}
        type="button"
        disabled={disabled}
        ref={ref}
        {...buttonProps}
    >
        {iconStart && <IconWrap>{iconStart}</IconWrap>}
        {children}
        {iconEnd && <IconWrap>{iconEnd}</IconWrap>}
        <RippleEffect />
    </StyledButton>
    )

})  

Button.displayName = "Button"