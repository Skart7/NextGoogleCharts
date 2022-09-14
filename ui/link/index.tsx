import styled, { Interpolation } from 'styled-components'

interface StyledLinkProps {
    mt?: number;
    mb?: number;
    mr?: number;
    ml?: number;    
    m?: number;
    sx?: Interpolation<React.CSSProperties>;
}
  
export const Link = styled.a.attrs<StyledLinkProps>(p => ({
    mt: p.mt || p.m || 0,
    mb: p.mb || p.m || 0,
    mr: p.mr || p.m || 0,
    ml: p.ml || p.m || 0,
    sx: p.sx
}))<StyledLinkProps>
`
    text-decoration: none;
    margin: ${p => p.mt}rem ${p => p.mr}rem ${p => p.mb}rem ${p => p.ml};

    &:hover, &:focus {
        color: ${p => p.theme.palette.primary.action};
        text-decoration: underline;
    }

    ${p => p.sx};
`