import React from 'react'
import dynamic from 'next/dynamic'

import { Grid } from '../../../../ui'

const MainChartProfit = dynamic(() => import('./profit'))
const MainChartOrders = dynamic(() => import('./orders'))


const MainCharts = () => {

    return (
    <Grid variant="container">
        <Grid variant='item' xs={6} md={12}>
           <MainChartProfit/>
        </Grid>
        <Grid variant='item' xs={6} md={12}>
            <MainChartOrders/>
        </Grid>
    </Grid>
    )
}

export default MainCharts