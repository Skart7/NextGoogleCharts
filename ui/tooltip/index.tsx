import styled from "styled-components"
import React from "react"
import { Portal } from "../portal";

interface TooltipProps {
    children: React.ReactNode;
    title?: string;
}

const Title = styled.span
`
    position: absolute;
    padding: 0.2rem 0.3rem 0.3rem 0.3rem;
    border-radius: ${p => p.theme.shape.borderRadius};
    background-color: ${p => p.theme.palette.background.paper};
    color: ${p => p.theme.palette.text.main};
    transition: ${p => p.theme.transition.toggleAction};
    font-size: ${p => p.theme.typography.body2.fontSize}; 
    font-weight: ${p => p.theme.typography.body2.fontWeight}; 
    font-family: ${p => p.theme.typography.body2.fontFamily};
    letter-spacing: ${p => p.theme.typography.body2.letterSpacing};
    line-height: ${p => p.theme.typography.body2.lineHeight};
    box-shadow: 0 0 5px 1px rgba(0,0,0,0.5);
    min-width: 12rem;
    width: auto;
    text-align: center;
`

export const Tooltip = React.forwardRef((props:TooltipProps, ref:any) => {

    const {
        children,
        title,
    } = props

    const [coords, setCoords] = React.useState({ left: 0, top: 0 })

    const hoverEffect = (e:React.MouseEvent<HTMLDivElement>) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect()
        setCoords({ left: e.clientX - rect.x / 2, top: e.clientY + rect.y })
    }

    const hoverEffectEnd = () => setCoords({ left: 0, top: 0 })

    return (
    <div 
        onMouseOver={hoverEffect} 
        onMouseLeave={hoverEffectEnd} 
    >
        <Portal>
        {
            coords.left !== 0 && coords.top !== 0 && <Title ref={ref} role="tooltip" className="title" style={coords}>{title}</Title>
        }
        </Portal>
        {children}
    </div>
    )

})

Tooltip.displayName = "Tooltip"