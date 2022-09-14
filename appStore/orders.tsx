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

const OrdersStore:StoreProps = {
    amountPerLastMonth: 0, 
    amountPerLastWeek: 0, 
    amountPerLastYear: 0,
    dataPerLastMonth: [], 
    dataPerLastWeek: [], 
    dataPerLastYear: []
}

const ContextOfCurrentStore = React.createContext<StoreProps>(OrdersStore)

export const useOrdersStoreForChart = () => React.useContext(ContextOfCurrentStore)

export const ProviderOrders:React.FC<{children:React.ReactNode}> = ({children}) => {

    const { 
        amountPerLastMonth, amountPerLastWeek, amountPerLastYear,
        dataPerLastMonth, dataPerLastWeek, dataPerLastYear
    } = useGeneratedDataForChart(500, 1500)

    const value:StoreProps = {
        amountPerLastMonth, amountPerLastWeek, amountPerLastYear,
        dataPerLastMonth, dataPerLastWeek, dataPerLastYear
    }

    return (
    <ContextOfCurrentStore.Provider value={value}>{children}</ContextOfCurrentStore.Provider>
    )
}