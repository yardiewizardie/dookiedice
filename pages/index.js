import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header/header'
import Sidebar from '../components/Sidebar'
import TopSellsDice from '../components/TopSellsDice';

import './index.scss';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Header />
    <Sidebar />
    <TopSellsDice />
  </div>
)

export default Home
