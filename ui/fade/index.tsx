import React from 'react'
import styled from 'styled-components'

interface FadeProps {
    children: React.ReactNode;
    action?: boolean;
}

const StyledAnimationFade = styled.div
`
    transition: ${p => p.theme.transition.toggleAction};

    &.shown {
        opacity:1;
    }
    &.hidden {
        opacity:0;
    }
`

export const Fade = React.forwardRef((props:FadeProps, ref:any) => {

    const {children, action=true} = props

    const [animate, setAnimate] = React.useState(false)

    React.useEffect(() => {
        action && setAnimate(true)
    }, [action])

    return (
        <StyledAnimationFade ref={ref} className={animate ? "shown" : "hidden"}>{children}</StyledAnimationFade>
    )
})

Fade.displayName = "Fade"