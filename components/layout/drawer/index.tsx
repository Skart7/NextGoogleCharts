import React from 'react'
import dynamic from 'next/dynamic'
import { Avatar, Box, Button, Drawer, IconButton, List, ListIcon, ListItem, ListText, Stack, Text } from '../../../ui'

const CloseTwoToneIcon = dynamic(() => import('@mui/icons-material/CloseTwoTone'))
const AbcTwoToneIcon = dynamic(() => import('@mui/icons-material/AbcTwoTone'))

import { useTheme } from 'styled-components'

interface DrawerProps {
    open: boolean;
    onClose: () => void;
}

const DrawerMenu:React.FC<DrawerProps> = ({open, onClose}) => {

    const theme = useTheme()

    return (
    <Drawer open={open} anchor="right" onClose={onClose}>

        <Stack p={1} direction='row' gap={1} justifyContent="space-between" alignItems='center'>
            <IconButton onClick={onClose}>
                <CloseTwoToneIcon/>
            </IconButton>
            <Text variant="h6" tag="h2">{process.env.TITLE}</Text>
        </Stack>

        <Box p={1} mt={2}>
            <Stack direction='column' gap={1} justifyContent='center' alignItems='center' sx={{ width: '100%' }}>
                <Avatar variant='circular' size="large" color="secondary">AK</Avatar>
                <Text variant="body1">Super Admin</Text>
                <Button variant="text" color='error'>Sign Out</Button>
            </Stack>
        </Box>
        <Box p={1} sx={{ height: '100%', backgroundColor: theme.palette.background.default, borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
            <List>
                <ListItem>
                    <ListIcon><AbcTwoToneIcon/></ListIcon>
                    <ListText>Visitors</ListText>
                </ListItem>
                <ListItem>
                    <ListIcon><AbcTwoToneIcon/></ListIcon>
                    <ListText>Users</ListText>
                </ListItem>
                <ListItem>
                    <ListIcon><AbcTwoToneIcon/></ListIcon>
                    <ListText>Profit</ListText>
                </ListItem>
            </List>
        </Box>

    </Drawer>
    )
}

export default DrawerMenu