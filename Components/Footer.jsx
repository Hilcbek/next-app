import Image from 'next/image'
import React from 'react'
import { MdMessage, MdPhone } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='w-[99%] mx-auto border-b-[1px] h-[30vh] border-solid border-gray-300 mb-5'>
        <div className='w-9/12 mx-auto grid grid-cols-4 gap-4'>
            <div className='w-full flex items-start h-full justify-start flex-col'>
                <div className='w-20 h-10 relative'>
                    <Image className='w-full h-full object-contain' src={'/logo.png'} alt='none' fill={true} />
                </div>
                <h1 className='my-2 text-gray-500'>Contact us We will help you for your dreams comes true!</h1>
                <div className='my-2'>
                    <p className='my-3 flex items-center justify-start text-xs text-gray-500'><MdPhone className='mr-2 text-black' />(+251)937-8988</p>
                    <p className='my-3 flex items-center justify-start text-xs text-gray-500'><MdMessage className='mr-2 text-black' />balemayehu07@gmail.com</p>
                </div>
                <div></div>
            </div>
            <div className='w-full flex items-start h-full justify-start flex-col'>
                <h1 className='text-md font-bold tracking-wide mb-3'>Company</h1>
                <p className='text-xs font-bold tracking-wider my-2'>New York</p>
                <p className='text-xs font-bold tracking-wider my-2'>Careers</p>
                <p className='text-xs font-bold tracking-wider my-2'>Mobile</p>
                <p className='text-xs font-bold tracking-wider my-2'>Blog</p>
                <p className='text-xs font-bold tracking-wider my-2'>How we work</p>
            </div>
            <div className='w-full flex items-start h-full justify-start flex-col'>
                <h1 className='text-md font-bold tracking-wide mb-3'>Working Hour</h1>
                <p className='text-xs tracking-wider my-2 font-black'><span className='text-gray-500 mr-2'>Mon-Fri</span>09:00 AM - 09:PM</p>
                <p className='text-xs tracking-wider my-2 font-black'><span className='text-gray-500 mr-2'>Sat</span>09:00AM - 07:PM</p>
                <p className='text-xs tracking-wider my-2 font-black'><span className='text-gray-500 mr-2'>Sun</span>: Closed</p>
            </div>
            <div className='w-full flex items-start h-full justify-start flex-col'>
                <h1 className='text-md font-bold tracking-wide mb-3'>NewSletter</h1>
                <p className='my-2 text-gray-500'>Contact us for your more information</p>
                <div className='my-2 flex items-center justify-start'>
                    <input type="text" className='p-3 border-solid outline-none text-xs border-gray-400 border-[1px] mr-1 rounded-md' placeholder='Your email' name="" id="" />
                    <button className='p-3 text-xs bg-[crimson] hover:bg-transparent hover:text-[crimson] border-solid border-[1px] border-transparent hover:border-[crimson] transition-all duration-500 text-white rounded-md'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer