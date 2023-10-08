"use client"
import { SearchContext } from '@/Context/SearchContext'
import { Menu } from '@headlessui/react'
import React, { useContext, useState } from 'react'
import {AiFillClockCircle} from 'react-icons/ai'
let hoursData = ['10:00','10:30','11:00','12:45','1:00']
const HourSelection = () => {
  let [hours,setHours] = useState('7:00')
  let { search } = useContext(SearchContext)
  return (
        <Menu as={'div'} className={'w-full relative border-solid border-[crimson] pl-2 lg:border-l-[2px]'}>
        <div className='w-full lg:block xs:flex items-center justify-center'>
            <Menu.Button className={'lg:text-left xs:text-center w-full flex xs:items-center xs:justify-center xs:flex-col lg:items-start lg:justify-start lg:flex-row'}>
                <AiFillClockCircle className='lg:w-fit xs:w-full mx-auto text-xs text-[crimson] mt-[2px]' />
                <div className='w-full ml-1'>
                    <p className='font-bold w-full text-xs'>SELECT HOURS</p>
                    <p className='font-medium w-full mt-2 text-xs'>{hours}</p>
                </div>
            </Menu.Button>
            <Menu.Items className={`${search ? 'lg:top-[70px]' : 'lg:-top-[250px]'} absolute xs:w-full lg:top-[70px] xs:-top-44 lg:w-7/12 lg:left-1 p-3 bg-white shadow-md rounded-[5px]`}>
                {
                    hoursData.map((hour,idx) => (
                        <div onClick={() => setHours(hour)} className='my-1 p-2 w-full hover:bg-[#eee] cursor-pointer xs:text-xs lg:text-sm font-light' key={idx}>{hour}</div>
                    ))
                }            
            </Menu.Items>
        </div>
    </Menu>
  )
}

export default HourSelection