import React from 'react'
import Dropdown from './Dropdown'

const RightBar = () => {
  return (
    <>
      <div className='rightClass'>
        <div className='salesClass'>
          <h4>Best Selling Products</h4>
          <Dropdown year={''} dropName={'This Week'} />
        </div>
        <hr />
        <div>
          <ul class='list-group'>
            <li class='list-group-item d-flex justify-content-between align-items-center'>
              Abc
              <span>785</span>
            </li>
            <li class='list-group-item d-flex justify-content-between align-items-center'>
              Tuvaar 1000
              <span>555</span>
            </li>
            <li class='list-group-item d-flex justify-content-between align-items-center'>
              MSM
              <span>513</span>
            </li>
            <li class='list-group-item d-flex justify-content-between align-items-center'>
              Jeans
              <span>452</span>
            </li>
            <li class='list-group-item d-flex justify-content-between align-items-center'>
              T-Shirt / Black  
              <span>567</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default RightBar
