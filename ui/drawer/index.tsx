import React from 'react'
import styled, { Interpolation } from 'styled-components'
import { Portal } from '../portal';
import { allowScrollbar } from '../system/allowSrollbar';
import { onTrapFocus, onTrapFocusInit } from '../system/trapFocus';

interface DrawerProps {
    anchor?: "left" | "right";
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
    width?: number;
    className?: string;
    id?: string;
    sx?: Interpolation<React.CSSProperties>;
}

interface DrawerContentProps {
    width?: number;
    sx?: Interpolation<React.CSSProperties>;
}

const DrawerOverlay = styled.div
`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: ${p => p.theme.transition.toggleAction};
    background-color: rgba(0,0,0, .55);

    &.shown {
        z-index: ${p => p.theme.zIndex.drawer};
        opacity: 1;
    }
    &.hidden {
        z-index: -${p => p.theme.zIndex.drawer};
        opacity: 0;
    }
`

const DrawerContent = styled.div.attrs<DrawerContentProps>(p => ({
    width: p.width || 300,
    sx: p.sx
}))<DrawerContentProps>
`   
    transition: ${p => p.theme.transition.toggleAction};
    position: absolute;
    top: 0;
    bottom: 0;
    min-width: ${p => p.width}px;
    background-color: ${p => p.theme.palette.background.paper};
    box-shadow: 3px 3px 3px 1px rgba(0,0,0,0, .5);
    
    &.left {  
        &.shown {
            left: 0;
        }
        &.hidden {
            left: -50%;
        }
    }
    &.right { 
        &.shown {
            right: 0;
        }
        &.hidden {
            right: -50%;
        }
    }
    ${p => p.sx};
`

export const Drawer = React.forwardRef((props:DrawerProps, ref:any) => {

    const {
        anchor="left",
        children,
        open = false,
        onClose,
        width,
        className, 
        id, 
        sx
    } = props

    const [active, setActive] = React.useState(false)
    const [visible, setVisible] = React.useState(false)
    const refDrawer = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if(open) {
            setTimeout(() => setVisible(true), 10)
            setTimeout(() => {
                setActive(true)
                refDrawer.current && onTrapFocusInit(refDrawer)
            }, 100)
            return allowScrollbar(false)
        }
        setTimeout(() => setActive(false), 10)        
        setTimeout(() => setVisible(false), 100)
        return allowScrollbar(true)
    }, [open])
    
    const cNameContent = [className, anchor, active ? "shown" : "hidden"].join(' ').trim()

    if(!visible) return null

    return (
    <Portal>
        <DrawerOverlay 
            role="presentation"
            className={active?"shown" : "hidden"}
            onClick={onClose}
        >
            <DrawerContent
                onKeyDown={(e) => onTrapFocus(e, refDrawer, onClose)}
                tabIndex={-1}
                ref={refDrawer}
                className={cNameContent}
                id={id}
                width={width}
                sx={sx}
                onClick={e => e.stopPropagation()}
            >{children}</DrawerContent>
        </DrawerOverlay>
    </Portal>
    )
})

Drawer.displayName = 'Drawer'