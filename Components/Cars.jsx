import React from 'react'
import Brands from './Brands'
import CarSlide from './CarSlide'

const Cars = () => {
  return (
    <div className='pt-20 min-h-[100vh] flex items-center justify-center flex-col' id='cars'>
      <Brands />
      <CarSlide />
    </div>
  )
}

export default Cars