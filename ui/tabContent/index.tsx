import React from 'react'
import { useTabContext } from '../tabProvider';

interface TabContentProps {
    children: React.ReactNode;
    value: string;
    className?: string;
    id?: string;
    tabContentProps?: object;
}

export const TabContent = React.forwardRef((props:TabContentProps, ref:any) => {

    const {
        children,
        value,
        className,
        id,
        tabContentProps
    } = props

    const {isValue} = useTabContext()

    if(value !== isValue) return null

    return (
    <div
        role="tabpanel"
        className={className}
        id={id}
        {...tabContentProps}
        ref={ref}
    >
        {children}
    </div>
    )

})

TabContent.displayName = 'TabContent'