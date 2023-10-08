"use client"
import React, { useContext, useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { Menu } from '@headlessui/react';
import { BsArrowRightShort } from 'react-icons/bs';
import {AiFillCalendar} from 'react-icons/ai'
import { format } from 'date-fns';
import { SearchContext } from '@/Context/SearchContext';
const DateSelection = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  let {search} = useContext(SearchContext) 
  return (
    <Menu as={'div'} className={'w-full relative my-2'}>
        <div className='w-full lg:block xs:flex items-center justify-center'>
            <Menu.Button className={'lg:text-left xs:text-center w-full flex xs:items-center xs:justify-center xs:flex-col lg:items-start lg:justify-start lg:flex-row'}>
                <AiFillCalendar className='lg:w-fit xs:w-full mx-auto text-xs text-[crimson] mt-[2px]' />
                <div className='w-full ml-1'>
                    <p className='font-bold w-full text-xs'>SELECT DATE</p>
                    <div className='flex items-center mt-2 xs:justify-center lg:justify-start'>
                        <p className='font-medium text-xs'>{format(state[0]?.startDate, 'MM/dd/yyyy')}</p>
                        <BsArrowRightShort className='text-[crimson] mx-1' />
                        <p className='font-medium text-xs'>{format(state[0]?.endDate, 'MM/dd/yyyy')}</p>
                    </div>
                </div>
            </Menu.Button>
            <Menu.Items className={`${search ? 'lg:top-16' : 'lg:-top-[390px]'} absolute xs:-top-[330px]`}>
                <DateRange
                  editableDateInputs={true}
                  onChange={item => setState([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                  rangeColors={['#ed1d24']}
                  color='#ed1d24'
                />      
            </Menu.Items>
        </div>
    </Menu>
  )
}

export default DateSelection