import React from 'react'
import Statistics from './statictics'
import LatestOrders from './mainCharts/latestOrders'
import MainCharts from './mainCharts'

import { Grid } from '../../../ui'
import MainChartVisitors from './mainCharts/store'

const Dashboard = () => {

    return (
    <Grid variant="container">
        <Grid variant="item" xs={12}>
            <Statistics/>
        </Grid>
        <Grid variant="item" xs={12}> 
            <MainCharts/>
            <Grid variant='container'>
                <Grid variant="item" xs={5} md={12}>
                    <MainChartVisitors/>
                </Grid>
                <Grid variant="item" xs={7} md={12}>
                    <LatestOrders/>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    )
}

export default Dashboard