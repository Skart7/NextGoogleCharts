import React from 'react'
import { Badge, Box, Container, IconButton, Link, Menu, MenuItem, MenuText, Paper, Text } from '../../../ui'
import dynamic from 'next/dynamic'

const NextLink = dynamic(() => import('next/link'))
const NotificationsNoneTwoToneIcon = dynamic(() => import('@mui/icons-material/NotificationsNoneTwoTone'))
const AccountCircleTwoToneIcon = dynamic(() => import('@mui/icons-material/AccountCircleTwoTone'))
const MenuTwoToneIcon = dynamic(() => import('@mui/icons-material/MenuTwoTone'))

import DrawerMenu from '../drawer'

const Header = () => {

    const [open, setOpen] = React.useState(false)
    const onClose = () => setOpen(false)
    const onOpen = () => setOpen(true)

    const [openMenu, setOpenMenu] = React.useState(false)

    const onToggleMenu = () => setOpenMenu(!openMenu)

    return (
    <Box as="header">
        <Container maxWidth='xl'>
            <Paper p={1} m={0.5} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                    <Text variant="h5" tag="h1">
                        <NextLink href="/" passHref>
                            <Link>{process.env.TITLE}</Link>
                        </NextLink>
                    </Text>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '1vh' }}>
                    <Badge color="warning" variant="dot">
                        <IconButton>
                            <AccountCircleTwoToneIcon/>
                        </IconButton>
                    </Badge>
                    <Badge color='secondary' value={2}>
                        <IconButton id="notificationButton" onClick={onToggleMenu}>
                            <NotificationsNoneTwoToneIcon/>
                        </IconButton>
                    </Badge>
                    <IconButton onClick={onOpen}>
                        <MenuTwoToneIcon/>
                    </IconButton>
                </Box>
            </Paper>
        </Container>
        <Menu refById='notificationButton' open={openMenu} onClose={onToggleMenu}>
            <MenuItem>
                <MenuText>Some Notification Title</MenuText>
            </MenuItem>
            <MenuItem>
                <MenuText>Some Notification Title</MenuText>
            </MenuItem>
            <MenuItem>
                <MenuText>Some Notification Title</MenuText>
            </MenuItem>
        </Menu>
        <DrawerMenu open={open} onClose={onClose} />
    </Box>
    )
}

export default Header