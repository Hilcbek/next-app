"use client"
import Image from 'next/image'
import React from 'react'
import { Fade } from '@/variants/variant'
import { motion } from 'framer-motion'
import {MdHandshake} from 'react-icons/md'
import {IoMdKey, IoMdTrendingUp} from 'react-icons/io'
const Why_us = () => {
  return (
    <div className='w-9/12 mx-auto' id='why_us'>
      <div className='w-full flex items-center flex-col justify-center'>
        <div className='flex h-full xs:pt-20 lg:pt-40 items-center justify-center flex-col'>
          <motion.h1
            variants={Fade('down',.1)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once : false, amount : .5}}
          className='xs:text-xl lg:text-4xl font-semibold text-center mb-3'>Unmatched excellence and customer satsfaction!</motion.h1>
          <motion.p
            variants={Fade('down',.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once : false, amount : .5}}
          className='xs:text-xs lg:text-md text-gray-400 text-center lg:w-7/12'>Our dedication to providing exceptional services sets us 
            apart from the competition From the moment you engage with
            us, we strive to exceed your expectiations in every interaction.
          </motion.p>
        </div>
        <motion.div
            variants={Fade('up',.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once : false, amount : .5}}
        className='w-full flex items-center justify-center xs:h-[120px]  lg:h-[480px] relative'>
          <Image src={'/ferarri.png'}  alt='none' fill={true} className='w-full h-full object-contain' />
        </motion.div>
      </div>
      <motion.div 
            variants={Fade('down',.4)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once : false, amount : .5}}
      className='w-full h-fit flex items-center lg:-mt-32 xs:flex-col lg:flex-row lg:justify-between'>
        <div className='w-full xs:h-fit lg:h-[290px] xs:my-1 lg:my-0 lg:shadow-none lg:p-0 xs:shadow-md xs:p-2 flex items-center lg:mr-4 justify-center flex-col'>
          <IoMdKey className='xs:text-2xl lg:text-3xl text-[crimson]' />
          <h1 className='font-medium text-center text-[19px] my-1'>Rent simply and quickly</h1>
          <p className='text-xs lg:w-9/12 mx-auto text-center font-medium text-gray-500'>The Ferrari key is a symbolic and functional element of Ferrari`s luxury sports cars.
            It represents more than just a means to start the engine; it embodies the brand`s 
            commitment to precision engineering, performance, and elegance.
          </p>
        </div>
        <div className='w-full xs:h-fit lg:h-[290px] xs:my-1 lg:my-0 lg:shadow-none lg:p-0 xs:shadow-md xs:p-2 flex items-center lg:mx-4 justify-center flex-col'>
          <IoMdTrendingUp className='xs:text-2xl lg:text-3xl text-[crimson]' />
          <h1 className='font-medium text-center text-[19px] my-1'>Modern & well maintained vechicles</h1>
          <p className='text-xs lg:w-9/12 mx-auto text-center font-medium text-gray-500'>The Ferrari key is typically a work of art in itself. Crafted with attention to detail, 
            it often features the iconic prancing horse logo and is designed to be ergonomic and visually
            appealing. The key`s design often reflects the sleek, aerodynamic lines of Ferrari`s cars,
            incorporating premium materials like metals, leather, and high-quality plastics.
          </p>
        </div>
        <div className='w-full xs:h-fit lg:h-[290px] xs:my-1 lg:my-0 lg:shadow-none lg:p-0 xs:shadow-md xs:p-2 flex items-center lg:ml-4 justify-center flex-col'>
          <MdHandshake className='xs:text-2xl lg:text-3xl text-[crimson]' />
          <h1 className='font-medium text-center text-[19px] my-1'>Prompt and flexiable services</h1>
          <p className='text-xs lg:w-9/12 mx-auto text-center font-medium text-gray-500'>Many modern Ferrari models utilize keyless entry systems. This means that the key communicates
             wirelessly with the car, allowing the owner to unlock and start the vehicle without removing 
             the key from their pocket or bag. This technology is not only convenient but also aligns 
             with Ferrari`s dedication to cutting-edge automotive engineering.
          </p>
      </div>
      </motion.div>
    </div>
  )
}
//,,
export default Why_us