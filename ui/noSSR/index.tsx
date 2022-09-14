import React from 'react'

interface noSsrProps {
    children: React.ReactNode,
    fallback?: React.ReactNode,
    defer?: boolean
}

export const NoSSR:React.FC<noSsrProps> = ({children, fallback=null, defer=false}) => {
    const [mount, setMount] = React.useState(false)

    React.useEffect(() => {
        if(!defer) {
            setMount(true)
        }
    }, [defer])

    return <>{mount ? children : fallback}</>
}
