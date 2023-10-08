"use client"
import React, { useContext, useState } from 'react'
import { Menu } from '@headlessui/react'
import {FaMapMarkerAlt} from 'react-icons/fa'
import { SearchContext } from '@/Context/SearchContext'
let locations = [
    'Main Street, Addis Ababa',
    'Tikur Abay, Nazareth',
    'Posta Bet, Hawassa'
]
const LocationSelection = () => {
    let [locaiton,setLocation] = useState('Harar, Pirmonet str.');
    let {search} = useContext(SearchContext)
  return (
    <Menu as={'div'} className={'w-full relative border-solid border-[crimson] mr-2 lg:border-r-[2px]'}>
        <div className='w-full lg:block xs:flex items-center justify-center'>
            <Menu.Button className={'lg:text-left xs:text-center w-full flex xs:items-center xs:justify-center xs:flex-col lg:items-start lg:justify-start lg:flex-row'}>
                <FaMapMarkerAlt className='lg:w-fit xs:w-full mx-auto text-xs text-[crimson] mt-[2px]' />
                <div className='w-full ml-1'>
                    <p className='font-bold w-full text-xs'>SELECT LOCATION</p>
                    <p className='font-medium w-full mt-2 text-xs'>{locaiton}</p>
                </div>
            </Menu.Button>
            <Menu.Items className={`${search ? 'lg:top-[70px]' : 'lg:-top-[170px]'} absolute lg:w-7/12 xs:w-10/12 xs:-top-40 lg:left-1 p-3 bg-white shadow-md rounded-[5px]`}>
                {
                    locations.map((loc,idx) => (
                        <div onClick={() => setLocation(loc)} className='my-1 xs:text-center lg:text-left p-2 w-full hover:bg-[#eee] cursor-pointer text-xs font-light' key={idx}>{loc}</div>
                    ))
                }            
            </Menu.Items>
        </div>
    </Menu>
  )
}

export default LocationSelection
//