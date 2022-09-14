import React from 'react'
import ReactDOM from 'react-dom'

export const Portal:React.FC<{children:React.ReactNode}> = ({children}) => {

    const [mount, setMount] = React.useState(false)
    
    React.useEffect(() => {
        setMount(true)
        return () => setMount(false)
    }, [])

    return mount ? ReactDOM.createPortal(children, document.getElementById('__portal') as HTMLElement) : null
}