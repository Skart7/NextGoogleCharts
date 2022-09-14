import React from 'react'
import { Chart } from 'react-google-charts'
import { useConcatForChart, useOptionsForChart } from '../../../../hooks'
import { Box, Button, Paper, Stack, Text, Skeleton } from '../../../../ui'
import { useProfitStoreForChart } from '../../../../appStore/profit'

const MainChartProfit = () => {

    const [dataChartPerMonth, setDataChartPerMonth] = React.useState(true)
    const {dataPerLastWeek, dataPerLastMonth} = useProfitStoreForChart()
    const dataChartOfWeek = useConcatForChart(['Day', 'Profit'], [dataPerLastWeek])
    const dataChartOfMonth = useConcatForChart(['Day', 'Profit'], [dataPerLastMonth])
    const options = useOptionsForChart('main')

    return (
    <Paper p={1} m={0.5}>
        <Stack mb={1} direction='row' justifyContent='space-between' alignItems='center' gap={1}>
            <Box>
                <Text variant="h5">Profit Overview</Text>
            </Box>
            <Box>
                <Button variant={dataChartPerMonth ? 'contained' : 'text'} onClick={ () => setDataChartPerMonth(true) }>Per Month</Button>
                <Button variant={!dataChartPerMonth ? 'contained' : 'text'} onClick={ () => setDataChartPerMonth(false) }>Per Week</Button>
            </Box>
        </Stack>
        <Box>
            <Chart 
                chartType="AreaChart" 
                width="100%"  
                loader={<Skeleton variant="rectangular" sx={{ height:options.height }} />}
                data={dataChartPerMonth ? dataChartOfMonth : dataChartOfWeek} 
                options={options}
            />
        </Box>
    </Paper>
    )
}

export default MainChartProfit 