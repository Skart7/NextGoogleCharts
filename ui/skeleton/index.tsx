import React from 'react';
import styled, {Interpolation} from 'styled-components'

interface SkeletonProps {
    variant?: "rectangular" | "circular" | "text";
    className?: string;
    mt?: number;mb?: number;mr?: number;ml?: number;m?: number;
    pt?: number;pb?: number;pr?: number;pl?: number;p?: number;
    sx?: Interpolation<React.CSSProperties>;
    id?: string;
    height?: string;
    width?: string;
}

const StyledSkeleton = styled.div.attrs<SkeletonProps>(p => ({
    mt: p.mt || p.m || 0,
    mb: p.mb || p.m || 0.625,
    mr: p.mr || p.m || 0,
    ml: p.ml || p.m || 0,
    pt: p.pt || p.p || 0,
    pb: p.pb || p.p || 0,
    pr: p.pr || p.p || 0,
    pl: p.pl || p.p || 0,
    sx: p.sx,
    height: p.height,
    width: p.width
}))<SkeletonProps>
`
    opacity: 0.15;
    animation: skeleton-loading 1.2s linear infinite alternate;

    margin: ${p => p.mt}rem ${p => p.mr}rem ${p => p.mb}rem ${p => p.ml}rem;
    padding: ${p => p.pt}rem ${p => p.pr}rem ${p => p.pb}rem ${p => p.pl}rem;

    &.rectangular {
        width: ${p => p.width || '100%'};
        border-radius: ${p => p.theme.shape.borderRadius};
        height: ${p => p.height || '7.5rem'};
        ${p => p.sx};
    }
    &.circular {
        width: ${p => p.width || '3rem'};
        border-radius: 50%;
        height: ${p => p.height || '3rem'};
        ${p => p.sx};
    }
    &.text {
        width: ${p => p.width || '100%'};
        border-radius: ${p => p.theme.shape.borderRadius};
        height: ${p => p.height || '.55rem'};
        ${p => p.sx};
    } 

    @keyframes skeleton-loading {
        0% { background-color: ${p => p.theme.palette.text.main} } 
        100% { background-color: ${p => p.theme.palette.text.disabled} }
    }
    
`

export const Skeleton = React.forwardRef((props:SkeletonProps, ref:any) => {

    const {
        className,
        id, 
        variant="text",
        mt, mr, mb, ml, m,
        pt, pr, pb, pl, p,
        sx
    } = props

    const cName = [className, variant].join(' ').trim()

    return (
    <StyledSkeleton 
        ref={ref} 
        className={cName} 
        mt={mt} mr={mr} mb={mb} ml={ml} m={m}
        pt={pt} pr={pr} pb={pb} pl={pl} p={p}
        sx={sx} id={id}
    />
    )

})

Skeleton.displayName = "Steleton"