import React from 'react'
import Chart from 'react-google-charts';
import { Box, Grid, Paper, Skeleton, Text } from '../../../../ui'
import dynamic from 'next/dynamic'

const MessageTwoToneIcon = dynamic(() => import('@mui/icons-material/MessageTwoTone'))

import { useRequestsStoreForChart } from '../../../../appStore/requests';
import { useConcatForChart, useOptionsForChart } from '../../../../hooks';
import { withSpacing } from '../../../../utils/forCharts';

const UsersState = () => {

    const {amountPerLastYear, dataPerLastYear} = useRequestsStoreForChart()
    const dataChart = useConcatForChart(['Day', 'Support Requests'], [dataPerLastYear])
    const options = useOptionsForChart('statictic')

    return (
    <Grid variant="item" xs={3} md={6} sm={12}>
        <Paper p={1}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1vh' }}>
                <MessageTwoToneIcon fontSize="large" />
                <Box>
                    <Text variant="caption">Support Requests per year</Text>
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

export default UsersState