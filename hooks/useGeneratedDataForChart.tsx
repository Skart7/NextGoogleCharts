import React from 'react'
import {getDaysArrayPerCurrentYear} from '../utils/forCharts'

export const useGeneratedDataForChart = (
    dayValueFrom: number,
    dayValueTo: number,
) => {

    const cbData = React.useCallback(() => {
        const arrayDays = getDaysArrayPerCurrentYear()
        const lengthDays = arrayDays.length
        const now = new Date()

        const data = new Array(lengthDays).fill('').map((_,index) => ([
            arrayDays[index],
            Math.floor(Math.random() * dayValueTo) + dayValueFrom  
        ]))

        const amountPerLastYear = data.reduce((acc,i) => acc+(Number(i[1])), 0)
        const amountPerLastMonth = data.slice(-now.getDate()).reduce((acc,i) => acc+(Number(i[1])), 0)
        const amountPerLastWeek = data.slice(-now.getDay()).reduce((acc,i) => acc+(Number(i[1])), 0)

        const dataPerLastYear = data
        const dataPerLastMonth = data.slice(-now.getDate())
        const dataPerLastWeek = data.slice(-now.getDay())

        return {
            amountPerLastYear,amountPerLastMonth,amountPerLastWeek,
            dataPerLastYear,dataPerLastMonth,dataPerLastWeek
        }

    }, [dayValueTo, dayValueFrom])

    return cbData() 
}