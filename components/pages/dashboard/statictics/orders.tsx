import React from 'react'
import Chart from 'react-google-charts';
import { Box, Grid, Paper, Skeleton, Text } from '../../../../ui'
import dynamic from 'next/dynamic'

const ListAltTwoToneIcon = dynamic(() => import('@mui/icons-material/ListAltTwoTone'))

import { useOrdersStoreForChart } from '../../../../appStore/orders';
import { useConcatForChart, useOptionsForChart } from '../../../../hooks';
import { withSpacing } from '../../../../utils/forCharts';

const OrdersState = () => {

    const {amountPerLastYear, dataPerLastYear} = useOrdersStoreForChart()
    const dataChart = useConcatForChart(['Day', 'Orders'], [dataPerLastYear])
    const options = useOptionsForChart('statictic')

    return (
    <Grid variant="item" xs={3} md={6} sm={12}>
        <Paper p={1}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1vh' }}>
                <ListAltTwoToneIcon fontSize="large" />
                <Box>
                    <Text variant="caption">Orders per year</Text>
                    <Text variant="h4">{withSpacing(amountPerLastYear)}</Text>
                </Box>
            </Box>
            <Box sx={{ width: '100%' }}> 
                <Chart 
                    chartType="AreaChart" 
                    width="100%"  
                    loader={<Skeleton variant="rectangular" sx={{ height:options.height }} />}
                    data={dataChart} 
                    options={options}
                />
            </Box>
        </Paper>
    </Grid>
    )
}

export default OrdersState