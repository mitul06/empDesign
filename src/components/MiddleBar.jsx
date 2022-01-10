import React from 'react'
import Card from './reuse/Card'

const MiddleBar = () => {
    return (
        <>
        <div className='middleClass'>

            <Card topText={'8'} bottomText={'VIP Customer'} />
            <Card topText={'10'} bottomText={'Regular Costomer'} />
            <Card topText={'27'} bottomText={'Risk Customer'} />
            <Card topText={'1298'} bottomText={'Lost Customer'} />
        </div>
        </>
    )
}

export default MiddleBar
