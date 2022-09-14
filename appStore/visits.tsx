import React from 'react'
import { useGeneratedDataForChart } from '../hooks'

interface StoreProps {
    amountPerLastMonth:number; 
    amountPerLastWeek:number;
    amountPerLastYear:number;
    dataPerLastMonth:(string | number)[][];
    dataPerLastWeek:(string | number)[][];
    dataPerLastYear:(string | number)[][];
}

const VisitsStore:StoreProps = {
    amountPerLastMonth: 0, 
    amountPerLastWeek: 0, 
    amountPerLastYear: 0,
    dataPerLastMonth: [], 
    dataPerLastWeek: [], 
    dataPerLastYear: []
}

const ContextOfCurrentStore = React.createContext<StoreProps>(VisitsStore)

export const useVisitsStoreForChart = () => React.useContext(ContextOfCurrentStore)

export const ProviderVisits:React.FC<{children:React.ReactNode}> = ({children}) => {

    const { 
        amountPerLastMonth, amountPerLastWeek, amountPerLastYear,
        dataPerLastMonth, dataPerLastWeek, dataPerLastYear
    } = useGeneratedDataForChart(25000, 40000)

    const value:StoreProps = {
        amountPerLastMonth, amountPerLastWeek, amountPerLastYear,
        dataPerLastMonth, dataPerLastWeek, dataPerLastYear
    }

    return (
    <ContextOfCurrentStore.Provider value={value}>{children}</ContextOfCurrentStore.Provider>
    )
}