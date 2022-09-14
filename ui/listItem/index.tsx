import React from 'react'
import styled from 'styled-components'
import { RippleEffect } from '../system/rippleEffect/default';

interface ListProps {
    children: React.ReactNode;
    onClick?: (e:React.MouseEvent<HTMLLIElement>) => void;
    className?: string;
    id?: string;
}

const StyledListItem = styled.li
`
    width: 100%;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    padding: 0.6rem;
    position: relative;
    overflow: hidden;
    gap: 1vh;
    cursor: pointer;
    border-radius: ${p => p.theme.shape.borderRadius};

    &:hover, &:focus {
        background-color: ${p => p.theme.palette.primary.action};
    }
`

export const ListText = styled.span
`
    font-size: ${p => p.theme.typography.body1.fontSize}; 
    font-weight: ${p => p.theme.typography.body1.fontWeight}; 
    font-family: ${p => p.theme.typography.body1.fontFamily};
    letter-spacing: ${p => p.theme.typography.body1.letterSpacing};
    line-height: ${p => p.theme.typography.body1.lineHeight}; 
`
export const ListIcon = styled.span
`
    min-width: 36px;
`

export const ListItem = React.forwardRef((props:ListProps,ref:any) => {

    const {
        children,
        onClick,
        className,
        id,
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
    <StyledListItem 
        ref={ref} 
        onClick={onClick} 
        onKeyDown={handleKeyDown}
        role="listitem"
        className={className}
        id={id}
        tabIndex={0}
    >
        {children}
        <RippleEffect />
    </StyledListItem>
    )
})

ListItem.displayName = 'ListItem'