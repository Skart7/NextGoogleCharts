import React from 'react'
import styled, { Interpolation } from 'styled-components'
import { Portal } from '../portal';
import { onTrapFocus, onTrapFocusInit } from '../system/trapFocus';

interface SnackbarProps {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
    autoHideDuration: number;
    anchor?: { x: "top" | "bottom"; y: "left" | "right" };
    onClick?: (e:React.MouseEvent) => void;
    className?: string;
    id?: string;
    sx?: Interpolation<React.CSSProperties>;
}

interface StyledSnackbarProps {
    sx?: Interpolation<React.CSSProperties>;
}

const StyledSnackbar = styled.div.attrs<StyledSnackbarProps>(p => ({
    sx: p.sx
}))<StyledSnackbarProps>
`
    transition: ${p => p.theme.transition.toggleAction};
    position: fixed;
    background-color: ${p => p.theme.palette.background.paper};
    border-radius: ${p => p.theme.shape.borderRadius};
    max-width: 20rem;
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.1);

    &.shown {
        z-index: ${p => p.theme.zIndex.snackbar};
        opacity: 1;
    }
    &.hidden {
        z-index: -${p => p.theme.zIndex.snackbar};
        opacity: 0;
    }

    &.top { top: 1.5rem;}
    &.bottom { bottom: 1.5rem; }
    &.right { right: 1.5rem; }
    &.left { left: 1.5rem; }

    ${p => p.sx};
`


export const Snackbar = React.forwardRef((props:SnackbarProps, ref:any) => {

    const {
        children,
        open = false,
        onClose,
        autoHideDuration = 3500,
        anchor = { x: "top", y: "right" },
        onClick,
        sx, 
        className,
        id
    } = props

    const [active, setActive] = React.useState(false)
    const [visible, setVisible] = React.useState(false)
    const refSnackbar = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if(open) {
            setTimeout(() => setVisible(true), 10)
            setTimeout(() => {
                setActive(true)
                refSnackbar.current && onTrapFocusInit(refSnackbar)
            }, 100)

            if(autoHideDuration) {
                setTimeout(() => {
                    onClose()
                }, autoHideDuration)

            }
            return
        }        
        setTimeout(() => setActive(false), 10)
        setTimeout(() => setVisible(false), 100)

    }, [open])

    if(!visible) return null

    const cName = [className, anchor.x, anchor.y, active ? "shown" : "hidden"].join(' ').trim()

    return (
    <Portal>
        <StyledSnackbar 
            onClick={onClick}
            onKeyDown={e => onTrapFocus(e, refSnackbar, onClose)}
            className={cName} 
            ref={refSnackbar}
            id={id}
            role="alert"
            sx={sx}
        >
            {children}
        </StyledSnackbar>
    </Portal>
    )

})

Snackbar.displayName = 'Snackbar'