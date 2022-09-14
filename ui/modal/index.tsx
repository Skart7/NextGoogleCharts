import styled, { Interpolation } from 'styled-components'
import React from 'react'
import { onTrapFocus, onTrapFocusInit } from '../system/trapFocus';
import { allowScrollbar } from '../system/allowSrollbar';
import { Portal } from '../portal';

interface ModalProps {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
    className?: string;
    id?: string;
    sx?: Interpolation<React.CSSProperties>;
}

interface ModalContentProps {
    sx?: Interpolation<React.CSSProperties>;
}

const ModalOverlay = styled.div
`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: ${p => p.theme.transition.toggleAction};
    background-color: rgba(0,0,0, .55);

    &.shown {
        z-index: ${p => p.theme.zIndex.modal};
        opacity: 1;
    }
    &.hidden {
        z-index: -${p => p.theme.zIndex.modal};
        opacity: 0;
    }
`

const ModalContent = styled.div.attrs<ModalContentProps>(p => ({
    sx: p.sx
}))<ModalContentProps>
`
    transition: ${p => p.theme.transition.toggleAction};

    &.shown {
        opacity:1;
        transform:translateY(0);
    }
    &.hidden {
        opacity:0;
        transform:translateY(-100px);
    }
    ${p => p.sx};
`

export const Modal = React.forwardRef((props:ModalProps, ref:any) => {

    const {
        children,
        open=false,
        onClose,
        className,
        id,
        sx
    } = props

    const [active, setActive] = React.useState(false)
    const [visible, setVisible] = React.useState(false)
    const refModal = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if(open) {            
            setTimeout(() => setVisible(true), 10)
            setTimeout(() => {
                setActive(true)
                refModal.current && onTrapFocusInit(refModal)
            }, 100)
            return allowScrollbar(false)
        }
        setTimeout(() => setActive(false), 10)
        setTimeout(() => setVisible(false), 100)
        return allowScrollbar(true)
    }, [open])

    if(!visible) return null

    const cName = [className, active?"shown" : "hidden"].join(' ').trim()

    return (
    <Portal>
        <ModalOverlay 
            onClick={onClose}
            className={active?"shown":"hidden"}
        >
            <ModalContent 
                ref={refModal}
                onKeyDown={(e) => onTrapFocus(e, refModal, onClose)}
                tabIndex={-1}  
                className={cName}
                id={id}
                sx={sx}
                onClick={e=>e.stopPropagation()}
            >{children}</ModalContent>
        </ModalOverlay>
    </Portal>
    )

})

Modal.displayName = "Modal"