import styled, { Interpolation, InterpolationValue } from 'styled-components'

interface StackProps {
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
    alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";   
    gap?: number;
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
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


export const Stack = styled.div.attrs<StackProps>(p => ({
    direction: p.direction || "row",
    alignItems: p.alignItems || "flex-start",
    justifyContent: p.justifyContent || "flex-start",
    gap: p.gap || 0,
    wrap: p.wrap || "wrap",
    mt: p.mt || p.m || 0,
    mb: p.mb || p.m || 0,
    mr: p.mr || p.m || 0,
    ml: p.ml || p.m || 0,
    pt: p.pt || p.p || 0,
    pb: p.pb || p.p || 0,
    pr: p.pr || p.p || 0,
    pl: p.pl || p.p || 0,
    sx: p.sx
}))<StackProps>
`
    display: flex;
    flex-direction: ${p => p.direction};
    justify-content: ${p => p.justifyContent};
    align-items: ${p => p.alignItems};
    gap: ${p => p.gap}vh;
    flex-wrap: ${p => p.wrap};
    margin: ${p => p.mt}rem ${p => p.mr}rem ${p => p.mb}rem ${p => p.ml}rem;
    padding: ${p => p.pt}rem ${p => p.pr}rem ${p => p.pb}rem ${p => p.pl}rem;

    ${p => p.sx as InterpolationValue};
`