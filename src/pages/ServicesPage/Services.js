import React from 'react'
import InfoSection from '../../components/infoSection/infoSection'
import Pricing from '../../components/Pricing/Pricing'
import { homeDbThree } from '../HomePage/Data'

const Services = () => {
    return (
        <>
             <Pricing/>
            <InfoSection {...homeDbThree}/>
        </>
    )
}

export default Services
