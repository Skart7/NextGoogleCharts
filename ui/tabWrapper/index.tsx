import React from 'react'
import styled, {Interpolation} from 'styled-components'

interface TabWrapperProps {
    className?: string;
    id?: string;
    tabWrapperProps?: object;
    children: React.ReactNode;
    mt?: number;
    mb?: number;
    mr?: number;
    ml?: number;
    m?: number;
    sx?: Interpolation<React.CSSProperties>;
}

const StyledTabWrapper = styled.div.attrs<TabWrapperProps>(p => ({
    mt: p.mt || p.m || 0,
    mb: p.mb || p.m || 0,
    mr: p.mr || p.m || 0,
    ml: p.ml || p.m || 0,
    sx: p.sx
}))<TabWrapperProps>
`
    width: 100%;
    display: inline-block;
    white-space: nowrap;
    padding-bottom: 0.325rem;
    overflow-x: auto;

    margin: ${p => p.mt}rem ${p => p.mr}rem ${p => p.mb}rem ${p => p.ml};
    ${p => p.sx};
`

export const TabWrapper = React.forwardRef((props:TabWrapperProps, ref:any) => {

    const {
        children,
        className,
        id,
        tabWrapperProps,
        sx,
        mr, ml, mb, mt, m
    } = props

    return (
    <StyledTabWrapper
        role="tablist"
        className={className}
        sx={sx}
        id={id}
        mr={mr} ml={ml} mb={mb} mt={mt} m={m}
        ref={ref}
        {...tabWrapperProps}
    >
        {children}
    </StyledTabWrapper>
    )

})

TabWrapper.displayName = 'TabWrapper'