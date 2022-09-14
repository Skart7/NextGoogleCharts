import React from 'react'
import styled, { Interpolation } from 'styled-components'
import { RippleEffect } from '../system/rippleEffect/default'
import {useTabContext} from '../tabProvider'

interface TabProps {
    className?: string;
    id?: string;
    children: React.ReactNode;
    value: string;
    selected?: boolean;
    disabled?: boolean;
    color?: "primary" | "secondary";
    tabProps?: object;
    sx?: Interpolation<React.CSSProperties>;
}

interface StyledTabProps {
    sx?: Interpolation<React.CSSProperties>;
}

const StyledTab = styled.button.attrs<StyledTabProps>(p => ({
    sx: p.sx
}))<StyledTabProps>
`
    outline: none;
    padding: 0.525rem;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    text-transform: ${p => p.theme.typography.button.textTransform};
    font-family: ${p => p.theme.typography.button.fontFamily};
    font-weight: ${p => p.theme.typography.button.fontWeight};
    transition: ${p => p.theme.transition.defaultAction};
    color: ${p => p.theme.palette.text.main};
    background: none;
    white-space: nowrap;
    position: relative;
    overflow: hidden;

    &.primary {
        &.selected {
            color: ${p => p.theme.palette.primary.main};
            border-color: ${p => p.theme.palette.primary.main};
        }
        &:focus {
            background-color: ${p => p.theme.palette.primary.action};
        }
    }
    &.secondary {
        &.selected {
            color: ${p => p.theme.palette.primary.main};
            border-color: ${p => p.theme.palette.primary.main};
        }
        &:focus {
            background-color: ${p => p.theme.palette.secondary.action};
        }
    }
    &:disabled {
        color: ${p => p.theme.palette.text.disabled};
        cursor: default;
    }
    ${p => p.sx};
`

export const Tab = React.forwardRef((props:TabProps, ref:any) => {

    const {
        className,
        id,
        tabProps,
        selected = false,
        disabled = false,
        value = "1",
        children,
        color = "primary",
        sx
    } = props

    const {onChangeValue, isValue} = useTabContext()

    const equal = value === isValue 
    const cName = [className, color, selected || equal && "selected"].join(' ').trim()

    return (
    <StyledTab
        type="button"
        role="tab"
        className={cName}
        id={id}
        sx={sx}
        ref={ref}
        disabled={disabled}
        onClick={() => onChangeValue(value)}
        {...tabProps}
    >
        {children}
        <RippleEffect/>
    </StyledTab>
    )

})

Tab.displayName = 'Tab'