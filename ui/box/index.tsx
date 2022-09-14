import styled, { Interpolation, InterpolationValue } from 'styled-components'

interface BoxProps {
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
    sx?: Interpolation<React.CSSProperties>;
}

export const Box = styled.div.attrs<BoxProps>(p => ({
    mt: p.mt || p.m || 0,
    mb: p.mb || p.m || 0,
    mr: p.mr || p.m || 0,
    ml: p.ml || p.m || 0,
    pt: p.pt || p.p || 0,
    pb: p.pb || p.p || 0,
    pr: p.pr || p.p || 0,
    pl: p.pl || p.p || 0,
    sx: p.sx
}))<BoxProps>
`
    margin: ${p => p.mt}rem ${p => p.mr}rem ${p => p.mb}rem ${p => p.ml}rem;
    padding: ${p => p.pt}rem ${p => p.pr}rem ${p => p.pb}rem ${p => p.pl}rem;
    ${p => p.sx as InterpolationValue};
`
