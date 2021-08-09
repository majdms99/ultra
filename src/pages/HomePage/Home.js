import React from 'react'
import InfoSection from '../../components/infoSection/infoSection'
import Pricing from '../../components/Pricing/Pricing'
import {homeDbFour, homeDbOne, homeDbThree, homeDbTow} from './Data'

const Home = () => {
    return (
        <>
            <InfoSection {...homeDbOne}/>
            <InfoSection {...homeDbTow}/>
            <Pricing/>
            <InfoSection {...homeDbThree}/>
            <InfoSection {...homeDbFour}/>
        </>
    )
}

export default Home
