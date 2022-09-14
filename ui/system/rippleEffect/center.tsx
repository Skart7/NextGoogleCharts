import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.span
`
    position: absolute;
    overflow: hidden;
    inset: 0px;
    border-radius: inherit;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Ripple = styled.span
`
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    opacity: 1;
    animation: 0.8s linear 1 forwards ripple-effect-center;
    background-color: ${p => p.theme.palette.text.main};

    @keyframes ripple-effect-center {
        0% {
            transform: scale(0.5);
            opacity: 0.35;
        }
        50% {
            transform: scale(5);
            opacity: 0.3;
        }
        100% {
            transform: scale(15);
            opacity: 0.1;
        }
    }
`

export const RippleEffect = React.forwardRef((props, ref:any) => {    

    const [isRippling, setIsRippling] = React.useState(false)

    const onClickHanlder = () => {        
        setIsRippling(true)
        setTimeout(() => setIsRippling(false), 300)
    }    

    return (
    <Wrapper onClick={onClickHanlder}>
        { isRippling && <Ripple ref={ref} /> }
    </Wrapper>
    )

})

RippleEffect.displayName = 'RippleEffect'