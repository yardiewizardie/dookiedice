import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header/header'
import Sidebar from '../components/sidebar'
import TopSellsDice from '../components/TopSellsDice'
import Features from '../components/features'
import MakeYourOwnDicePromo from '../components/makeyourowndicepromo'
import DiceMenu from '../components/dicemenu'
import Footer from '../components/footer'
import './index.scss'

const Home = () => (
    <div className="container">
        <Head>
            <title>Dookie</title>
        </Head>

        <Header />
        <Sidebar />
        <TopSellsDice />
        <Features />
        <MakeYourOwnDicePromo />
        <DiceMenu />
        <Footer />
    </div>
)

export default Home
