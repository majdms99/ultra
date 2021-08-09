import React from 'react'
import InfoSection from '../../components/infoSection/infoSection'
import {homeDbFour, homeDbThree, homeDbTow}  from '../HomePage/Data'

const Product = () => {
    return (
        <>
            
            <InfoSection {...homeDbTow}/>
            <InfoSection {...homeDbThree}/>
            <InfoSection {...homeDbFour}/>
        </>
    )
}

export default Product
