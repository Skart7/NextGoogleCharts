import React from 'react'
import styled from 'styled-components'

const RippleContainer = styled.div
`
    position: absolute;
    overflow: hidden;
    inset: 0;
`

const Ripple = styled.span
`
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    position: absolute;
    opacity: 1;
    animation: 0.45s linear 1 forwards ripple-effect;
    background-color: ${p => p.theme.palette.text.main};

    @keyframes ripple-effect {
        0% {
            transform: scale(3);
            opacity: 0.2;
        }
        25% {
            transform: scale(25);
            opacity: 0.2;
        }
        50% {
            transform: scale(45);
            opacity: 0.15;
        }
        75% {
            transform: scale(95);
            opacity: 0.1;
        }
        100% {
            transform: scale(250);
            opacity: 0.05;
        }
    }
`

export const RippleEffect = React.forwardRef((props, ref:any) => {    

    const [coords, setCoords] = React.useState({ left: -1, top: -1 })
    const [isRippling, setIsRippling] = React.useState(false)

    const onClickHanlder = (e:React.MouseEvent<HTMLSpanElement>) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect() 
        setCoords({ left: e.clientX - rect.x, top: e.clientY - rect.y })
    }

    React.useEffect(() => {
        if (coords.left !== -1 && coords.top !== -1) {
          setIsRippling(true)
          setTimeout(() => {
            setIsRippling(false)
            setCoords({ left: -1, top: -1 })
        }, 450)
        } else setIsRippling(false)
      }, [coords])

    return (
    <RippleContainer onClick={onClickHanlder}>
        { isRippling && <Ripple style={coords} ref={ref} /> }
    </RippleContainer>
    )

})

RippleEffect.displayName = 'RippleEffect'