import React from "react";
import { ProviderOrders } from "./orders"
import { ProviderProfit } from "./profit"
import { ProviderVisits } from './visits'
import { ProviderRequests } from "./requests"
import { ProviderProductCategories } from './categories'

export const ProviderStore:React.FC<{children:React.ReactNode}> = ({children}) => {

    return (
    <ProviderProfit>
        <ProviderOrders>
            <ProviderVisits>
                <ProviderRequests>
                    <ProviderProductCategories>
                        {children}
                    </ProviderProductCategories>
                </ProviderRequests>
            </ProviderVisits>
        </ProviderOrders>
    </ProviderProfit>
    )
}