import React from 'react'
import styled from 'styled-components'

interface GridProps {
    children: React.ReactNode;
    mr?: number; mt?: number; ml?: number; mb?: number; m?: number;
    gap?: number;
    variant?: "container" | "item";
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch",
    direction?: "row" | "row-reverse" | "column" | "column-reverse",
    xs?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12; 
    sm?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    md?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    lg?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    xl?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const indexWidths = [
    '0', '8.33333%', '16.66667%', '25%', '32.33333%', '41.66667%', '50%', 
    '58.33333%', '66.66667%', '75%', '83.33333%', '91.66667%', '100%'
]

const StyledGrid = styled.div.attrs<GridProps>(p => ({
    gap: p.gap || 0,
    flexDirection: p.direction || 'row',
    alignItems: p.alignItems || 'flex-start',
    justifyContent: p.justifyContent || 'flex-start',
    xs: p.xs,
    sm: p.sm,
    md: p.md,
    lg: p.lg,
    xl: p.xl,
}))<GridProps>
`
    &.container {
        display: inline-flex;
        flex-wrap: wrap;
        flex-direction: ${p => p.direction};
        align-items: ${p => p.alignItems};
        justify-content: ${p => p.justifyContent};
        width: 100%;
        margin-top: -${p => p.gap}vh;
        margin-left: -${p => p.gap}vh;
        padding: ${p => p.gap}vh;
        width: calc(100% + ${p => p.gap}vh);

        &.container > * {
            padding-top: ${p => p.gap}vh;
            padding-left: ${p => p.gap}vh;
        }
    }
    &.item {
        
        @media (min-width: ${p => p.theme.container.xs}) {
            max-width: ${ p => indexWidths[p.xs as number] };
            flex-basis: ${ p => indexWidths[p.xs as number] };
        }
        @media (max-width: ${p => p.theme.container.xl}) {
            max-width: ${ p => indexWidths[p.xl as number] };
            flex-basis: ${ p => indexWidths[p.xl as number] };
        }
        @media (max-width: ${p => p.theme.container.lg}) {
            max-width: ${ p => indexWidths[p.lg as number] };
            flex-basis: ${ p => indexWidths[p.lg as number] };
        }
        @media (max-width: ${p => p.theme.container.md}) {
            max-width: ${ p => indexWidths[p.md as number] };
            flex-basis: ${ p => indexWidths[p.md as number] };
        }
        @media (max-width: ${p => p.theme.container.sm}) {
            max-width: ${ p => indexWidths[p.sm as number] };
            flex-basis: ${ p => indexWidths[p.sm as number] };
        }  
        
    }
`

export const Grid = React.forwardRef((props:GridProps, ref:any) => {

    const {
        children,
        gap,
        variant="container",
        justifyContent,
        alignItems,
        direction,
        xs, sm, md, lg, xl,
    } = props

    const cName = [variant].join(' ').trim()

    return (
        <StyledGrid
            className={cName}
            gap={gap}
            justifyContent={justifyContent}
            alignItems={alignItems}
            direction={direction}
            ref={ref}
            xs={xs} sm={sm} md={md} lg={lg} xl={xl}
        >
            {children}
        </StyledGrid>
    )

})

Grid.displayName = 'Grid'