import { SearchContext } from '@/Context/SearchContext'
import React, { useContext } from 'react'
import LocationSelection from './LocationSelection';
import DateSelection from './DateSelection';
import HourSelection from './HourSelection';

const Search = () => {
  let {search} = useContext(SearchContext);
  return (
    <div className={`${search ? 'w-9/12' : 'w-full'} mx-auto flex items-center justify-between h-[80px] p-1`}>
        <LocationSelection />
        <DateSelection />
        <HourSelection />
        <div className='w-4/12 flex my-2 items-center justify-center'>
          <button className='p-3 hover:bg-transparent hover:text-[crimson] border-solid border-[1px] border-transparent hover:border-[crimson] transition-all duration-500 w-full text-sm tracking-wider rounded-md bg-[crimson] text-white'>Search</button>
        </div>
    </div>
  )
}

export default Search