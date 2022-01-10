import React from 'react'

const Card = ({topText, bottomText, topNum, bottomNum}) => {
    return (
        <>
        <div className='cardClass'>
        <div className='col-sm-2 row'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title1'>{topText}</h5>
              <h5 className='card-title2'>{bottomText}</h5>

              <div className='numClass'>

              <h5 className='card-title3'>{topNum}</h5>
              <h5 className='card-title4'>{bottomNum}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default Card
