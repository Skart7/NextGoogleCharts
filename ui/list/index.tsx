import React from 'react'
import styled, { Interpolation } from 'styled-components'

interface ListProps {
    children: React.ReactNode;
    sx?: Interpolation<React.CSSProperties>;
    className?: string;
    id?: string;
}

const StyledList = styled.ul.attrs<ListProps>(p => ({
    sx: p.sx
}))<ListProps>
`
    list-style: none;
    ${p => p.sx};
`

export const List = React.forwardRef((props:ListProps,ref:any) => {

    const {
        children,
        sx
    } = props 

    return (
    <StyledList sx={sx} ref={ref} role="list">
        {children}
    </StyledList>
    )
})

List.displayName = 'List'