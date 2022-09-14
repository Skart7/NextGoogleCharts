import React from 'react'
import styled, { Interpolation } from 'styled-components'
import { Fade } from '../fade'
import { Portal } from '../portal'
import { allowScrollbar } from '../system/allowSrollbar'
import { RippleEffect } from '../system/rippleEffect/default'
import { onTrapFocus, onTrapFocusInit } from '../system/trapFocus'

interface GroupInputProps {
    mt?: number;
    mb?: number;
    mr?: number;
    ml?: number;
    m?: number;
    sx?: Interpolation<React.CSSProperties>;
}

interface SelectProps {
    value?: string;
    onChange?: (e:React.SyntheticEvent<HTMLLIElement>, newValue: string) => void;
    color?: "primary" | "secondary";
    variant?: "outlined" | "filled";
    size?: "small" | "medium" | "large";
    textHelper?: string;
    statusHelper?: "success" | "warning" | "error" | "caption";
    disabled?: boolean;
    fullWidth?: boolean; 
    iconStart?: React.ReactElement;
    mt?: number;
    mb?: number;
    mr?: number;
    ml?: number;
    m?: number;
    listOptions: { value: string; label: string; disabled?: boolean; }[];
    defaultValue: string;
    className?: string;
    id?: string;
    sx?: Interpolation<React.CSSProperties>;
}

const SelectorContainer = styled.div.attrs<GroupInputProps>(p => ({
    mt: p.mt || p.m || 0,
    mb: p.mb || p.m || 0,
    mr: p.mr || p.m || 0,
    ml: p.ml || p.m || 0,
    sx: p.sx
}))<GroupInputProps> 
`
    width: 16.5rem;
    margin: ${p => p.mt}rem ${p => p.mr}rem ${p => p.mb}rem ${p => p.ml}rem;

    &.fullWidth {
        width: 100%;
    }
    ${p => p.sx};
`

const TextField = styled.button
`
    border-radius: ${p => p.theme.shape.borderRadius};
    background-color: transparent;
    font-family: ${p => p.theme.typography.fontFamily};
    border: 1px solid transparent;
    transition: ${p => p.theme.transition.defaultAction};
    width: 100%;
    padding-right: 2.5rem;
    outline: none;
    cursor: pointer;
    text-align: start;
    position: relative;

    & + .icon {
        color: ${p => p.theme.palette.text.caption};
    }

    &.small {
        font-size: 0.8rem;
        padding: 0.625rem;        
    }
    &.medium {
        font-size: 0.9rem;
        padding: 0.725rem;  
    }
    &.large {
        font-size: 1rem;
        padding: 0.85rem;
    }

    &.start {
        padding-left: 2.5rem;
    }

    &.filled {
        background-color: ${p => p.theme.palette.text.disabled};

        &.primary {
            &:focus {
                outline: 2px solid ${p => p.theme.palette.primary.main};
                background-color: ${p => p.theme.palette.primary.action};
                color: ${p => p.theme.palette.primary.contrastText};

                & + .icon {
                    color: ${p => p.theme.palette.primary.contrastText};
                }
            }
            &[aria-selected='true'] {
                background-color: ${p => p.theme.palette.primary.action};
                color: ${p => p.theme.palette.primary.contrastText};

                & + .icon {
                    color: ${p => p.theme.palette.primary.contrastText};
                }
            }   
        }
        &.secondary {
            &:focus {
                outline: 2px solid ${p => p.theme.palette.secondary.main};
                background-color: ${p => p.theme.palette.secondary.action};
                color: ${p => p.theme.palette.secondary.contrastText};

                & + .icon {
                    color: ${p => p.theme.palette.secondary.contrastText};
                }
            } 
            &[aria-selected='true'] {
                background-color: ${p => p.theme.palette.secondary.action};
                color: ${p => p.theme.palette.secondary.contrastText};

                & + .icon {
                    color: ${p => p.theme.palette.secondary.contrastText};
                }
            }   
        }
        
    }

    &.outlined {
        border-color: ${p => p.theme.palette.text.caption};
        color: ${p => p.theme.palette.text.caption};
        
        &.primary {
            &:focus {
                outline: 2px solid ${p => p.theme.palette.primary.main};
                border-color: ${p => p.theme.palette.primary.main};
                color: ${p => p.theme.palette.primary.main};

                & + .icon {
                    color: ${p => p.theme.palette.primary.main};
                }
            } 
            &[aria-selected='true'] {
                border-color: ${p => p.theme.palette.primary.main};
                color: ${p => p.theme.palette.primary.main};

                & + .icon {
                    color: ${p => p.theme.palette.primary.main};
                }
            }
        }
        &.secondary {
            &:focus {
                outline: 2px solid ${p => p.theme.palette.secondary.main};
                border-color: ${p => p.theme.palette.secondary.main};
                color: ${p => p.theme.palette.secondary.main};

                & + .icon {
                    color: ${p => p.theme.palette.secondary.main};
                }
            } 
            &[aria-selected='true'] {
                border-color: ${p => p.theme.palette.secondary.main};
                color: ${p => p.theme.palette.secondary.main};

                & + .icon {
                    color: ${p => p.theme.palette.secondary.main};
                }
            }
        }

    }
    &:disabled {
        background-color: transparent;
        color: ${p => p.theme.palette.text.disabled};
        border-color: ${p => p.theme.palette.text.disabled};
        cursor: default;

        & + .icon {
            color: ${p => p.theme.palette.text.disabled};
        }
    }

`

const IconStart = styled.span
`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
    pointer-events: none;
`

const IconEnd = styled.span
`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    pointer-events: none;
`

const IconArrow = styled.span
`
    &.upArrow {
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid ${p => p.theme.palette.text.caption}; 
    }   
    &.downArrow {
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid ${p => p.theme.palette.text.caption};
    }
`

const DropdownList = styled.ul.attrs<{dropdownWidth:number}>(p => ({
    dropdownWidth: p.dropdownWidth
}))<{dropdownWidth:number}>
`
    z-index: ${p => p.theme.zIndex.tooltip};
    list-style: none;
    position: absolute;
    width: ${p => p.dropdownWidth}px;
    top: 0;
    left: 0;
    border-radius: ${p => p.theme.shape.borderRadius};
    overflow-y: auto;
    max-height: 21rem;
    box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.7);
    background-color: ${p => p.theme.palette.background.paper};
`

const DropdownItem = styled.li
`
    padding: 0.725rem 1rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &[aria-selected="true"] {
        background-color: ${p => p.theme.palette.text.disabled};
    }
    &:hover, &:focus {
        background-color: ${p => p.theme.palette.background.default};
    }
    &[aria-disabled="true"] {
        background-color: transparent;
        color: ${p => p.theme.palette.text.disabled};
        pointer-events: none;
    }
`

const Overlay = styled.div
`
    z-index: ${p => p.theme.zIndex.modal};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
`

const TextHelper = styled.span
`
    font-family: ${p => p.theme.typography.caption.fontFamily};
    font-weight: ${p => p.theme.typography.caption.fontWeight};
    font-size: ${p => p.theme.typography.caption.fontSize};
    line-height: ${p => p.theme.typography.caption.lineHeight};
    letter-spacing: ${p => p.theme.typography.caption.letterSpacing};
    margin-left: 0.5rem;
    margin-top: 0.1rem;
    
    &.caption {
        color: ${p => p.theme.palette.text.caption};
    }
    &.success {
        color: ${p => p.theme.palette.success.main};
    }
    &.error {
        color: ${p => p.theme.palette.error.main};
    }
    &.warning {
        color: ${p => p.theme.palette.warning.main};
    }
`

export const Select = React.forwardRef((props:SelectProps, ref:any) => {

    const {
        value,
        onChange,
        listOptions = [],
        color = "primary",
        disabled = false,
        fullWidth = false,
        size = "medium",
        statusHelper = "caption",
        textHelper,
        variant = "outlined",
        iconStart,
        defaultValue,
        className,
        id,
        mr, ml, mb, mt, m, sx
    } = props

    const [toggleMenu, setToggleMenu] = React.useState(false)
    const [coords, setCoords] = React.useState({ left: 0, top: 0 }) 
    const refDropdownList = React.useRef<HTMLUListElement>(null)
    const [selectedValue, setSelectedValue] = React.useState("")   
    const [dropdownWidth, setDropdownWidth] = React.useState(0) 

    const onOpenMenu = (e:React.MouseEvent) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect()
        setCoords({ top: rect.top + rect.height, left: rect.left })
        setToggleMenu(true)
        setDropdownWidth((e.target as HTMLElement).offsetWidth)
        allowScrollbar(false)        
    }    

    const onCloseMenu = () => {
        setCoords({ top: 0, left: 0 })
        allowScrollbar(true)
        setToggleMenu(false)
    }

    const onKeyDownList = (e:React.KeyboardEvent<HTMLUListElement>) => {        
        onTrapFocus(e, refDropdownList, onCloseMenu)
    }

    const onClickItem = (e:React.SyntheticEvent<HTMLLIElement>) => {        
        setSelectedValue(e.currentTarget.dataset.value as string)
        onChange && onChange(e, e.currentTarget.dataset.value as string)
        setTimeout(() => onCloseMenu(), 500)
    }

    const onKeyDownItem = (e:React.KeyboardEvent<HTMLLIElement>) => {
        switch(e.key) {
            case ' ':
            case 'SpaceBar':
            case 'Enter':
                e.preventDefault()
                setSelectedValue(e.currentTarget.dataset.value as string)
                onChange && onChange(e, e.currentTarget.dataset.value as string)
                onCloseMenu()
            break
            default:
            break
        }   
    }        

    React.useEffect(() => {
        if(toggleMenu && refDropdownList.current) {
            onTrapFocusInit(refDropdownList)
        }
    }, [toggleMenu])

    const cName = [className, color, variant, size, iconStart && "start"].join(' ').trim()
    const cNameSelector = [fullWidth && "fullWidth"].join(' ').trim()
    
    return (
    <SelectorContainer className={cNameSelector} mr={mr} ml={ml} mb={mb} mt={mt} m={m} sx={sx}>
        <TextField 
            onClick={onOpenMenu} 
            type="button"
            aria-haspopup="listbox"
            aria-expanded={toggleMenu}
            aria-selected={selectedValue ? true : false}
            disabled={disabled}
            className={cName} 
            ref={ref}
            id={id}
        >
            {iconStart && <IconStart>{iconStart}</IconStart>}
                {value || selectedValue || defaultValue}
            <IconEnd><IconArrow className={toggleMenu ? "upArrow" : "downArrow"} /></IconEnd>
        </TextField>
        {textHelper && <TextHelper className={statusHelper}>{textHelper}</TextHelper>}
        <Portal>
        {
            toggleMenu && 
            <Fade>
                <DropdownList 
                    style={coords}  
                    tabIndex={-1}
                    onKeyDown={onKeyDownList}
                    ref={refDropdownList}
                    dropdownWidth={dropdownWidth}
                >
                {
                    listOptions.map((item, index) => (
                        <DropdownItem 
                            key={index}
                            role="option" 
                            data-value={item.value}
                            tabIndex={item.disabled ? -1 : 0}
                            onClick={onClickItem}
                            onKeyDown={onKeyDownItem}
                            aria-selected={selectedValue === item.value}
                            aria-disabled={item.disabled}
                        >
                            {item.label}
                            <RippleEffect />
                        </DropdownItem>
                    ))
                }
                </DropdownList>
                <Overlay onClick={onCloseMenu} />
            </Fade>
        }
        </Portal>
    </SelectorContainer>
    )

})

Select.displayName = 'Select'