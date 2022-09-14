import React from "react"
import { useTheme } from 'styled-components'

export const useOptionsForChart = (type:'main' | 'statictic') => {

    const theme = useTheme()

    const options = React.useCallback(() => {
        switch(type) {
            case 'main': 
            return {
                colors: [theme.palette.secondary.main, theme.palette.primary.main],
                is3D: true,
                legend: "none",
                height: 275,
                backgroundColor: "transparent",
                vAxis: { gridlines: { color: 'transparent' }, textPosition: 'none' },
                hAxis: { gridlines: { color: 'transparent' } },
            }
            case 'statictic':
            return {
                legend: "none",
                height: 75,
                colors: [theme.palette.secondary.main],
                backgroundColor: "transparent",
                hAxis: { gridlines: { color: 'transparent' }, textPosition: 'none' },
                vAxis: { gridlines: { color: 'transparent' }, textPosition: 'none' },
                tooltip : {
                    trigger: 'none'
                }
            }
        }
    }, [type])

    return options()
}