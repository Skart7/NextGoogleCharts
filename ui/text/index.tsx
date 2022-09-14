import React from 'react';
import styled, { Interpolation } from 'styled-components'

interface TextProps {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2" | "caption" | "button";
    mt?: number;
    mb?: number;
    mr?: number;
    ml?: number;    
    m?: number;
    tag?:any;
    className?: string;
    id?: string;
    sx?: Interpolation<React.CSSProperties>;
    children: React.ReactNode;
}

const StyledText = styled.p.attrs<TextProps>(p => ({
    mt: p.mt || p.m || 0,
    mb: p.mb || p.m || 0,
    mr: p.mr || p.m || 0,
    ml: p.ml || p.m || 0,
    sx: p.sx
}))<TextProps>
`
    margin: ${p => p.mt}rem ${p => p.mr}rem ${p => p.mb}rem ${p => p.ml};

    &.h1 {
        font-size: ${p => p.theme.typography.h1.fontSize}; 
        font-weight: ${p => p.theme.typography.h1.fontWeight}; 
        font-family: ${p => p.theme.typography.h1.fontFamily};
        letter-spacing: ${p => p.theme.typography.h1.letterSpacing};
        line-height: ${p => p.theme.typography.h1.lineHeight}; 
    }
    &.h2 {
        font-size: ${p => p.theme.typography.h2.fontSize}; 
        font-weight: ${p => p.theme.typography.h2.fontWeight}; 
        font-family: ${p => p.theme.typography.h2.fontFamily};
        letter-spacing: ${p => p.theme.typography.h2.letterSpacing};
        line-height: ${p => p.theme.typography.h2.lineHeight}; 
    }
    &.h3 {
        font-size: ${p => p.theme.typography.h3.fontSize}; 
        font-weight: ${p => p.theme.typography.h3.fontWeight}; 
        font-family: ${p => p.theme.typography.h3.fontFamily};
        letter-spacing: ${p => p.theme.typography.h3.letterSpacing};
        line-height: ${p => p.theme.typography.h3.lineHeight};
    }
    &.h4 {
        font-size: ${p => p.theme.typography.h4.fontSize}; 
        font-weight: ${p => p.theme.typography.h4.fontWeight}; 
        font-family: ${p => p.theme.typography.h4.fontFamily};
        letter-spacing: ${p => p.theme.typography.h4.letterSpacing};
        line-height: ${p => p.theme.typography.h4.lineHeight}; 
    }
    &.h5 {
        font-size: ${p => p.theme.typography.h5.fontSize}; 
        font-weight: ${p => p.theme.typography.h5.fontWeight}; 
        font-family: ${p => p.theme.typography.h5.fontFamily};
        letter-spacing: ${p => p.theme.typography.h5.letterSpacing};
        line-height: ${p => p.theme.typography.h5.lineHeight};
    }
    &.h6 {
        font-size: ${p => p.theme.typography.h6.fontSize}; 
        font-weight: ${p => p.theme.typography.h6.fontWeight}; 
        font-family: ${p => p.theme.typography.h6.fontFamily};
        letter-spacing: ${p => p.theme.typography.h6.letterSpacing};
        line-height: ${p => p.theme.typography.h6.lineHeight}; 
    }
    &.body1 {
        font-size: ${p => p.theme.typography.body1.fontSize}; 
        font-weight: ${p => p.theme.typography.body1.fontWeight}; 
        font-family: ${p => p.theme.typography.body1.fontFamily};
        letter-spacing: ${p => p.theme.typography.body1.letterSpacing};
        line-height: ${p => p.theme.typography.body1.lineHeight}; 
    }
    &.body2 {
        font-size: ${p => p.theme.typography.body2.fontSize}; 
        font-weight: ${p => p.theme.typography.body2.fontWeight}; 
        font-family: ${p => p.theme.typography.body2.fontFamily};
        letter-spacing: ${p => p.theme.typography.body2.letterSpacing};
        line-height: ${p => p.theme.typography.body2.lineHeight};
    }
    &.caption {
        font-size: ${p => p.theme.typography.caption.fontSize}; 
        font-weight: ${p => p.theme.typography.caption.fontWeight}; 
        font-family: ${p => p.theme.typography.caption.fontFamily};
        letter-spacing: ${p => p.theme.typography.caption.letterSpacing};
        line-height: ${p => p.theme.typography.caption.lineHeight}; 
        color: ${p => p.theme.palette.text.caption};
    }
    &.button {
        font-size: ${p => p.theme.typography.button.fontSize}; 
        font-weight: ${p => p.theme.typography.button.fontWeight}; 
        font-family: ${p => p.theme.typography.button.fontFamily};
        letter-spacing: ${p => p.theme.typography.button.letterSpacing};
        line-height: ${p => p.theme.typography.button.lineHeight}; 
        text-transform: ${p => p.theme.typography.button.textTransform};
    }
    ${p => p.sx};
`
export const Text = React.forwardRef((props:TextProps, ref:any) => {
    
    const {
        children,
        className,
        variant="body1",
        tag = "p",
        mt, mr, mb, ml, m,
        id,
        sx
    } = props

    const cName = [className, variant].join(' ').trim()

    return (
    <StyledText
        as={tag}
        ref={ref}
        id={id}
        sx={sx}
        mt={mt} mr={mr} mb={mb} ml={ml} m={m}
        className={cName}
    >{children}</StyledText>
    )

}) 

Text.displayName = "Text"