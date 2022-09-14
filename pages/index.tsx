import type { NextPage } from 'next'
import React from 'react'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../components/layout'))
const Dashboard = dynamic(() => import('../components/pages/dashboard'))
import { NoSSR } from '../ui'

const Home: NextPage = () => {        

  return (
    <Layout title="Dashboard">
      <NoSSR>
        <Dashboard/>
      </NoSSR>
    </Layout>
  )
}

export default Home
