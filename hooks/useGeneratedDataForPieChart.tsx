import React from 'react'

export const useGeneratedDataForPieChart = (
    arrayLabels: any[],
    secondParamFrom: number,
    secondParamTo: number,
) => {

    const cbData = React.useCallback(() => {
        const productStore = new Array(arrayLabels.length).fill('').map((_, index) => ([
            arrayLabels[index],
            Math.floor(Math.random() * secondParamFrom) + secondParamTo
        ]))

        return {productStore}

    }, [arrayLabels, secondParamFrom, secondParamTo])

    return cbData() 
}