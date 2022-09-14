import React from 'react'
import Chart from 'react-google-charts';
import { Box, Grid, Paper, Skeleton, Text } from '../../../../ui'
import dynamic from 'next/dynamic'

const VisibilityTwoToneIcon = dynamic(() => import('@mui/icons-material/VisibilityTwoTone'))

import { useConcatForChart, useOptionsForChart } from '../../../../hooks';
import { useVisitsStoreForChart } from '../../../../appStore/visits';
import { withSpacing } from '../../../../utils/forCharts';

const VisitorsState = () => {

    const {amountPerLastYear, dataPerLastYear} = useVisitsStoreForChart()
    const dataChart = useConcatForChart(['Day', 'Visits'], [dataPerLastYear])
    const options = useOptionsForChart('statictic')    

    return (
    <Grid variant="item" xs={3} md={6} sm={12}>
        <Paper p={1}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1vh' }}>
                <VisibilityTwoToneIcon fontSize="large" />
                <Box>
                    <Text variant="caption">Visits per year</Text>
                    <Text variant="h4">{withSpacing(amountPerLastYear)}</Text>
                </Box>
            </Box>
            <Box sx={{ width: '100%' }}> 
            <Chart 
                chartType="AreaChart" 
                loader={<Skeleton variant="rectangular" sx={{ height:options.height }} />}
                width="100%"  
                data={dataChart} 
                options={options}
            />
            </Box>
        </Paper>
    </Grid>
    )
}

export default VisitorsState