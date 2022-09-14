import React from 'react';
import styled, { Interpolation } from 'styled-components'

interface PaperProps {
    shadow?: "small" | "medium" | "large",
    mt?: number;
    mb?: number;
    mr?: number;
    ml?: number;
    m?: number;
    pt?: number;
    pb?: number;
    pr?: number;
    pl?: number;
    p?: number;
    children: React.ReactNode;
    className?: string;
    id?: string;
    tag?: any;
    sx?: Interpolation<React.CSSProperties>;
}

const StyledPaper = styled.div.attrs<PaperProps>(p => ({
    mt: p.mt || p.m || 0,
    mb: p.mb || p.m || 0,
    mr: p.mr || p.m || 0,
    ml: p.ml || p.m || 0,
    pt: p.pt || p.p || 0,
    pb: p.pb || p.p || 0,
    pr: p.pr || p.p || 0,
    pl: p.pl || p.p || 0,
    sx: p.sx
}))<PaperProps>
`   
    border-radius: ${p => p.theme.shape.borderRadius};
    background-color: ${p => p.theme.palette.background.paper};
    
    margin: ${p => p.mt}rem ${p => p.mr}rem ${p => p.mb}rem ${p => p.ml}rem;
    padding: ${p => p.pt}rem ${p => p.pr}rem ${p => p.pb}rem ${p => p.pl}rem;

    &.small {
        box-shadow: 0px 0px 3px 0px ${p => p.theme.palette.background.paper};
    }
    &.medium {
        box-shadow: 0px 0px 5px 3px ${p => p.theme.palette.background.paper};
    }
    &.large {
        box-shadow: 0px 0px 15px 3px ${p => p.theme.palette.background.paper};
    }
    ${p => p.sx};
`

export const Paper = React.forwardRef((props:PaperProps, ref:any) => {
    const {
        children,
        mr, ml, mb, mt, m,
        pr, pl, pb, pt, p,
        tag = 'div',
        className,
        shadow="small",
        sx, id
    } = props

    const cName = [className, shadow].join('').trim()

    return (
    <StyledPaper
        mr={mr} ml={ml} mb={mb} mt={mt} m={m}
        pr={pr} pl={pl} pt={pt} pb={pb} p={p}
        className={cName}
        sx={sx}
        id={id}
        tag={tag}
        ref={ref}
    >{children}</StyledPaper>
    )
})

Paper.displayName = "Paper"