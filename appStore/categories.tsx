import React from 'react'
import { useGeneratedDataForPieChart } from '../hooks'
import {categories} from '../utils/forCharts'

interface StoreProps {
    productStore: (string | number)[][]
}

const ProductCategoriesStore:StoreProps = {
    productStore: []
}

const ContextOfCurrentStore = React.createContext<StoreProps>(ProductCategoriesStore)

export const useProductCategoriesForChart = () => React.useContext(ContextOfCurrentStore)

export const ProviderProductCategories:React.FC<{children:React.ReactNode}> = ({children}) => {

    const { 
        productStore
    } = useGeneratedDataForPieChart(categories, 2000, 5000)    

    const value:StoreProps = {
        productStore
    }

    return (
    <ContextOfCurrentStore.Provider value={value}>{children}</ContextOfCurrentStore.Provider>
    )
}