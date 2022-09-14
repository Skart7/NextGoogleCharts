import React from 'react'
import styled from 'styled-components'

interface ContainerProps {
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const StyledContainer = styled.div
`
    width: 100%;
    margin: 0 auto;

    &.xs {
        max-width: ${p => p.theme.container.xs};
    }
    &.sm {
        max-width: ${p => p.theme.container.sm};
    }
    &.md {
        max-width: ${p => p.theme.container.md};
    }
    &.lg {
        max-width: ${p => p.theme.container.lg};
    }
    &.xl {
        max-width: ${p => p.theme.container.xl};
    }
`

export const Container = React.forwardRef((props:ContainerProps, ref:any) => {
    const {
        children,
        maxWidth="lg",
        className,
        id
    } = props

    const cName = [className, maxWidth].join(' ').trim()

    return (
    <StyledContainer ref={ref} id={id} className={cName}>{children}</StyledContainer>
    )
})

Container.displayName = "Container"