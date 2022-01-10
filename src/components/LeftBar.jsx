import React from 'react'
import Dropdown from './Dropdown'


const LeftBar = () => {
    

  return (
    <>
      <div className='leftClass'>
        <div className='salesClass'>
          <h4>Sales Summary</h4>
          <Dropdown year={''} dropName={'This Week'} />
        </div>
        <hr />
        <div className='textSales'>
          <div className='row'>
            <div class='col'>
              <h6>Total Sales</h6>
              <h5>2C</h5>
            </div>
            <div class='col'>
              <h6>Last Quater</h6>
              <h5>2C</h5>
            </div>
            <div class='col'>
              <h6>Last Month</h6>
              <h5>23.50L</h5>
            </div>
            <div class='col'>
              <h6>Last Week</h6>
              <h5>64.84L</h5>
            </div>
          </div>
          <div>
              
          </div>
        </div>
      </div>
    </>
  )
}

export default LeftBar
