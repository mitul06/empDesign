import React from 'react'
import Card from './reuse/Card'

const TopBar = () => {
  return (
    <>
      <div className='mainTop'>
        <div className='firstTop row'>
        <div class="col-md-3">
          <Card
            topText={'Total Customer'}
            bottomText={'New Customer'}
            topNum={'1343'}
            bottomNum={'218'}
          />
          </div>
          <div class="col-md-3">

          <Card
            topText={'No. Of Products'}
            bottomText={'New Products'}
            topNum={'7557'}
            bottomNum={'4095'}
            />
            </div>
            <div class="col-md-3">

          <Card
            topText={'Total Income'}
            bottomText={'vs Previous'}
            topNum={'78,456.95'}
            bottomNum={'27.3%'}
            />
            </div>
            <div class="col-md-3">

          <Card
            topText={''}
            bottomText={''}
            topNum={''}
            bottomNum={''}
            />
            </div>
        </div>
        <div className='secondTop row mt-2'>
        <div class="col-md-3">

          <Card
            topText={'Total Customer'}
            bottomText={'New Customer'}
            topNum={'1343'}
            bottomNum={'218'}
            />
            </div>
            <div class="col-md-3">

          <Card
            topText={'No. of Suppliers'}
            bottomText={'New Suppliers'}
            topNum={'1035'}
            bottomNum={'248'}
            />
            </div>
            <div class="col-md-3">

          <Card
            topText={'Stock in Amount'}
            bottomText={'Stock in Qty'}
            topNum={'-2'}
            bottomNum={'44456'}
            />
            </div>
            <div class="col-md-3">

          <Card
            topText={'Total Customer'}
            bottomText={'New Customer'}
            topNum={'1343'}
            bottomNum={'218'}
            />
            </div>
        </div>
      </div>
    </>
  )
}

export default TopBar
