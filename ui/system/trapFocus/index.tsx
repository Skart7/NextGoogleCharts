import React from "react"

export const onTrapFocus = (e:React.KeyboardEvent, refElem:any, onClose?:(e:any) => void) => {
    if(e.key === 'Escape') {
        return onClose && onClose(e)
    }
    if(e.key !== 'Tab') {
        return
    }
    if(refElem && refElem.current) {  
        const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        const firstFocusableElement = refElem.current.querySelectorAll(focusableElements)[0] as HTMLElement
        const focusableContent = refElem.current.querySelectorAll(focusableElements)
        const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement        
        
        if (e.shiftKey && document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus()
            return e.preventDefault()
        }
        if (!e.shiftKey && document.activeElement === lastFocusableElement) { 
            firstFocusableElement.focus()
            return e.preventDefault()
        }
    }
}

export const onTrapFocusInit = (refElem:any) => {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    const firstFocusableElement = refElem.current.querySelectorAll(focusableElements)[0] as HTMLElement
    firstFocusableElement.focus()
}