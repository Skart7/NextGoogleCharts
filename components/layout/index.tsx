import React from 'react'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('./header'))

import { Container } from '../../ui'
import Head from 'next/head'

interface LayoutProps {
    children: React.ReactNode;
    title: string;
}

const Layout:React.FC<LayoutProps> = ({children, title}) => {

    return (
    <>
        <Head>
            <title>{title} | {process.env.TITLE}</title>
        </Head>
        <Header/>
        <Container maxWidth="xl">{children}</Container>
    </>
    )
}

export default Layout