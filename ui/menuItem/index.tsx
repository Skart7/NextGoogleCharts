import React from 'react'
import styled from 'styled-components'
import { RippleEffect } from '../system/rippleEffect/default';

interface MenuItemProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    onClick?: (e:React.MouseEvent<HTMLLIElement>) => void;
}

export const MenuText = styled.span
`
    font-size: ${p => p.theme.typography.body2.fontSize}; 
    font-weight: ${p => p.theme.typography.body2.fontWeight}; 
    font-family: ${p => p.theme.typography.body2.fontFamily};
    letter-spacing: ${p => p.theme.typography.body2.letterSpacing};
    line-height: ${p => p.theme.typography.body2.lineHeight}; 
`
export const MenuIcon = styled.span
`
    min-width: 36px;
`

const StyledMenuItem = styled.li
`
    padding: 0.725rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    gap: 1vh;
    width: 100%;
    position: relative;
    
    &:hover, &:focus {
        background-color: ${p => p.theme.palette.background.default};
    }
`

export const MenuItem = React.forwardRef((props:MenuItemProps, ref:any) => {

    const {
        children,
        className,
        id,
        onClick
    } = props

    const handleKeyDown = (e:any) => {
        switch (e.key) {
          case " ":
          case "SpaceBar":
          case "Enter":
            e.preventDefault();
            onClick && onClick(e)
            break;
          default:
            break;
        }
    }

    return (
        <StyledMenuItem
            role="menuitem"
            tabIndex={0}
            onClick={onClick}
            onKeyDown={handleKeyDown}
            className={className}
            id={id}
            ref={ref}
        >
        {children}
        <RippleEffect />
    </StyledMenuItem>
    )

})

MenuItem.displayName = 'MenuItem'