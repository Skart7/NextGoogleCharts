import styled, { Interpolation } from 'styled-components'
import React from 'react'
import {Portal} from '../portal'
import { onTrapFocus, onTrapFocusInit } from '../system/trapFocus';
import { allowScrollbar } from '../system/allowSrollbar';
import { Fade } from '../fade';


interface MenuProps {
    menuListProps?: object;
    onClose: (e:React.MouseEvent) => void;
    open: boolean;
    children: React.ReactNode;
    className?: string;
    id?: string;
    style?: object;
    refById: string;
    width?: string;
    sx?: Interpolation<React.CSSProperties>;
}

interface MenuListProps {
    width?: string;
    sx? : Interpolation<React.CSSProperties>;
}

const MenuList = styled.ul.attrs<MenuListProps>(p => ({
    width: p.width || 'auto',
    sx: p.sx
}))<MenuListProps>
`
    z-index: ${p => p.theme.zIndex.tooltip};
    list-style: none;
    position: absolute;
    top: 25%;
    left: 0;
    border-radius: ${p => p.theme.shape.borderRadius};
    box-shadow: 3px 3px 10px 1px rgba(0,0,0,0.7);
    background-color: ${p => p.theme.palette.background.paper};
    width: ${p => p.width};
    overflow-y: auto;
    max-height: 21rem;

    ${p => p.sx};
`

const Overlay = styled.div
`
    z-index: ${p => p.theme.zIndex.modal};
    background-color: transparent;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
`

export const Menu = React.forwardRef((props:MenuProps, ref:any) => {

    const {
        children,
        open = false,
        onClose,
        menuListProps,
        refById = '',
        className,
        width = 'auto',
        id,
        sx
    } = props

    const [coords, setCoords] = React.useState({ top: 0, left: 0 })
    const refId = React.useRef<HTMLElement>()
    const menuListRef = React.useRef<HTMLUListElement>(null)

    React.useEffect(() => {
        if(open) {
            allowScrollbar(false)
            refId.current = document.getElementById(refById) as HTMLElement
            const rect = refId.current.getBoundingClientRect()            
            setCoords({ top: rect.top + rect.height, left: rect.left })
            menuListRef.current && onTrapFocusInit(menuListRef)            
        }
        else {
            allowScrollbar(true)
        }
    }, [open, refById])

    return (
    <Portal>
        {
            open && (
                <Fade action={open}>
                    <MenuList
                        id={id}
                        onKeyDown={(e) => onTrapFocus(e, menuListRef, onClose)}
                        className={className}
                        {...menuListProps}
                        tabIndex={-1}
                        ref={menuListRef}
                        style={coords}
                        width={width}
                        sx={sx}
                    >
                        {children}
                    </MenuList>
                    <Overlay onClick={onClose} />
                </Fade>
            )
        }
    </Portal>
    )

})

Menu.displayName = 'Menu'