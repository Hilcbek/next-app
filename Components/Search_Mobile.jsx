import React from 'react'
import LocationSelection from './LocationSelection'
import DateSelection from './DateSelection'
import HourSelection from './HourSelection'

const Search_Mobile = () => {
  return (
    <div className='flex xs:items-center xs:justify-center lg:items-start lg:justify-start lg:flex-row xs:flex-col w-11/12 mx-auto'>
      <LocationSelection />
      <DateSelection />
      <HourSelection />
      <div className='w-full flex my-2 items-center justify-center'>
        <button className='p-3 w-5/12 text-sm tracking-wider rounded-md bg-[crimson] text-white'>Search</button>
      </div>
    </div>
  )
}

export default Search_Mobile