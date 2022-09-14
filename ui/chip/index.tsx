import React from 'react'
import styled, { Interpolation } from 'styled-components'


interface ChipProps {
    className?: string;
    id?: string;
    children: React.ReactNode;
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'caption' | string;
    removeIcon?: boolean;
    onRemove?: () => void;
    sx?: Interpolation<React.CSSProperties>;
    variant?: 'outlined' | 'filled';
}

const StyledChip = styled.div.attrs<ChipProps>(p => ({
    sx: p.sx
}))<ChipProps>
`
    border-radius: 1rem;
    border: 1px solid transparent;
    padding: 0.25rem 0.5rem;
    display: inline-flex;
    align-items: center;
    gap: 1vh;
    font-size: 0.8rem;
    font-family: ${p => p.theme.typography.body2.fontFamily};
    font-weight: 400;
    letter-spacing: ${p => p.theme.typography.body2.letterSpacing};
    line-height: ${p => p.theme.typography.body2.lineHeight};
    text-transform: lowercase;

    &.filled {
        &.caption {
            background-color: ${p => p.theme.palette.text.caption};
            color: ${p => p.theme.palette.text.main};
        }
        &.primary {
            background-color: ${p => p.theme.palette.primary.main};
            color: ${p => p.theme.palette.primary.contrastText};
        }
        &.secondary {
            background-color: ${p => p.theme.palette.secondary.main};
            color: ${p => p.theme.palette.secondary.contrastText};
        }
        &.error {
            background-color: ${p => p.theme.palette.error.main};
            color: ${p => p.theme.palette.error.contrastText};
        }
        &.warning {
            background-color: ${p => p.theme.palette.warning.main};
            color: ${p => p.theme.palette.warning.contrastText};
        }
        &.success {
            background-color: ${p => p.theme.palette.success.main};
            color: ${p => p.theme.palette.success.contrastText};
        }
    }
    &.outlined {
        &.caption {
            border-color: ${p => p.theme.palette.text.caption};
            color: ${p => p.theme.palette.text.caption};
        }
        &.primary {
            border-color: ${p => p.theme.palette.primary.main};
            color: ${p => p.theme.palette.primary.main};
        }
        &.secondary {
            border-color: ${p => p.theme.palette.secondary.main};
            color: ${p => p.theme.palette.secondary.main};
        }
        &.error {
            border-color: ${p => p.theme.palette.error.main};
            color: ${p => p.theme.palette.error.main};
        }
        &.warning {
            border-color: ${p => p.theme.palette.warning.main};
            color: ${p => p.theme.palette.warning.main};
        }
        &.success {
            border-color: ${p => p.theme.palette.success.main};
            color: ${p => p.theme.palette.success.main};
        }
    }

    ${p => p.sx};
`

const IconRemove = styled.button
`
    outline: none;
    border: none;
    background-color: transparent;
    font-weight: bold;
    padding: 0.1rem 0.3rem;
    font-size: 0.8rem;
    cursor: pointer;
    color: currentColor;
    border-radius: 50%;

    &:hover, &:focus {
        background-color: ${p => p.theme.palette.text.disabled};
    }
`

export const Chip = React.forwardRef((props:ChipProps, ref:any) => {

    const {
        children,
        className,
        id,
        sx,
        onRemove,
        color = 'caption',
        variant = 'outlined',
        removeIcon = false,
    } = props 

    const cName = [className, variant, color].join(' ').trim()

    return (
    <StyledChip
        className={cName}
        id={id}
        ref={ref}
        sx={sx}
    >
        {children}
        { removeIcon && <IconRemove onClick={onRemove}>&#x2715;</IconRemove>}
    </StyledChip>
    )
})

Chip.displayName = 'Chip'