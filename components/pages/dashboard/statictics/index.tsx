import React from 'react'
import { Grid } from '../../../../ui'

import dynamic from 'next/dynamic'

const OrdersState = dynamic(() => import('./orders'))
const ProfitState = dynamic(() => import('./profit'))
const UsersState = dynamic(() => import('./supportRequest'))
const VisitorsState = dynamic(() => import('./visitors'))

const Statictics = () => {

    return (
        <Grid variant="container" gap={1}>
            <VisitorsState/>
            <UsersState/>
            <OrdersState/>
            <ProfitState/>
        </Grid>
    )
}

export default Statictics