"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { Fade } from '@/variants/variant'
import Image from 'next/image'
const Contact = () => {
  return (
    <div className='xs:w-11/12 lg:w-9/12 mx-auto h-screen xs:flex-col lg:flex-row flex items-center justify-center' id='contact'>
      <motion.div
      variants={Fade('up',0.3)} 
      initial="hidden" 
      whileInView={"show"} 
      viewport={{ once : false, amount : .6}}
      className='w-full'>
        <h1 className='xs:text-xl xs:w-10/12 lg:w-full lg:text-2xl'>Download our App now and it the road with ease!</h1>
        <p className='my-3 text-gray-400 text-sm'>A mobile app, short for mobile application, is a software program designed to run on mobile devices
           like smartphones and tablets. These applications are developed to provide specific functions or 
           services to users, ranging from entertainment, productivity, communication, and more. Here`s
          some key information about mobile apps
        </p>
        <motion.div
              variants={Fade('right',0.4)} 
              initial="hidden" 
              whileInView={"show"} 
              viewport={{ once : false, amount : .8}}
              className='flex items-center xs:justify-center lg:justify-start'>
              <button className='xs:w-[110px] xl:w-[150px] mr-1 h-12 rounded-md relative'>
                <Image src={'/googlePlay.png'} alt='none' fill={true} className='w-full rounded-md h-full object-cover' />  
              </button>
              <button className='xs:w-[110px] xl:w-[150px] ml-1 h-12 rounded-md relative'>
                <Image src={'/appStore.png'} alt='none' fill={true} className='w-full rounded-md h-full object-cover' />  
              </button>
          </motion.div>
      </motion.div>
      <motion.div
        variants={Fade('down',0.4)} 
        initial="hidden" 
        whileInView={"show"} 
        viewport={{ once : false, amount : .6}}
        className='w-full xs:h-[200px] xs:mt-4 lg:mt-0 lg:h-[480px] relative'>
        <Image className='w-full h-full object-contain' src={'/mobile_app.webp'} fill={true} alt='none' />
      </motion.div>
    </div>
  )
}

export default Contact