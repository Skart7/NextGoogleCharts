import React from 'react'
import { Chart } from 'react-google-charts'
import { useProductCategoriesForChart } from '../../../../appStore/categories'
import { useOptionsForChart, useConcatForChart } from '../../../../hooks'
import { Box, Paper, Skeleton, Stack, Text } from '../../../../ui'

const MainChartStore = () => {

    const {productStore} = useProductCategoriesForChart()
    const dataChart = useConcatForChart(['Category', 'Value'], [productStore])
    const options = useOptionsForChart('main')

    return (
    <Paper p={1} m={0.5}>
        <Stack direction='row' justifyContent='space-between' alignItems='center' gap={1}>
            <Box>
                <Text variant="h5">Store Overview</Text>
            </Box>
        </Stack>
        <Box>
            <Chart 
                chartType="PieChart" 
                width="100%"  
                loader={<Skeleton variant="rectangular" sx={{ height:options.height }} />}
                data={dataChart} 
                options={options}
            />
        </Box>
    </Paper>
    )
}

export default MainChartStore