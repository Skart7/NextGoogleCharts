import React from "react"

export const useConcatForChart = (headOfChart:[string, string, any?], bodyOfChart:[...args:any]) => {

    const [array, setArray] = React.useState<string[][]>([])

    React.useEffect(() => {
        setArray([headOfChart].concat(...bodyOfChart))
    }, [])

    return array
}