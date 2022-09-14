import React from 'react'
import { Chip, Grid, Paper, Text } from '../../../../ui'

const status = ['received', 'in processing', 'pending', 'sent', 'returned']
const color = ['success', 'caption', 'warning', 'primary', 'error']

const Data = new Array(7).fill('').map((_) => (
    {
        status: status[Math.floor(Math.random() * 4)],
        color: color[Math.floor(Math.random() * 4)],
        owner: 'Anonym',
        amount: Math.floor(Math.random() * 5000) + 500,
        date: `${new Date().getMonth()}/${new Date().getDate()}/${new Date().getFullYear()}`
    }
))

const colorEqual = (text: string) => {
    for (let i = 0; i < status.length; i++) {
        if (text === status[i]) {
            return color[i]
        }
    }
}

const LatestOrders = () => {

    return (
        <Paper m={0.5} p={1}>

            <Text variant="h5" mb={1}>Last Orders</Text>

            {
                Data.length > 0 && Data.map((item, index) => (
                    <Grid key={index} variant="container" alignItems='center' gap={0.5}>
                        <Grid xs={3} sm={4} variant="item">
                            <Text variant="caption">{item.date}</Text>
                        </Grid>
                        <Grid xs={3} sm={4} variant="item">
                            <Chip variant="outlined" color={colorEqual(item.status)}>
                                {item.status}
                            </Chip>
                        </Grid>
                        <Grid xs={3} sm={0} variant="item">
                            <Text variant="caption">{item.owner}</Text>
                        </Grid>
                        <Grid xs={3} sm={4} variant="item">
                            <Text variant="button">{item.amount}$</Text>
                        </Grid>
                    </Grid>
                )).reverse()
            }
        </Paper>
    )
}

export default LatestOrders