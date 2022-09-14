import React from 'react'
import Chart from 'react-google-charts';
import { Box, Grid, Paper, Skeleton, Text } from '../../../../ui'
import dynamic from 'next/dynamic'

const AttachMoneyTwoToneIcon = dynamic(() => import('@mui/icons-material/AttachMoneyTwoTone'))

import { useProfitStoreForChart } from '../../../../appStore/profit';
import { useConcatForChart, useOptionsForChart } from '../../../../hooks';
import { withSpacing } from '../../../../utils/forCharts';

const ProfitState = () => {

    const {amountPerLastYear, dataPerLastYear} = useProfitStoreForChart()
    const dataChart = useConcatForChart(['Day', 'Profit'], [dataPerLastYear])
    const options = useOptionsForChart('statictic')    

    return (
    <Grid variant="item" xs={3} md={6} sm={12}>
        <Paper p={1}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1vh' }}>
                <AttachMoneyTwoToneIcon fontSize="large" />
                <Box>
                    <Text variant="caption">Profit per year</Text>
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

export default ProfitState