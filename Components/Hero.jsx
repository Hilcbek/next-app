"use client"
import React, { useContext } from 'react'
import Search from './Search'
import { SearchContext } from '@/Context/SearchContext'
import Image from 'next/image'
import {motion,easeInOut} from 'framer-motion'
import { Fade } from '@/variants/variant'
const Hero = () => {
    let {search} = useContext(SearchContext);
  return (
    <div className='h-screen xl:h-[87vh]' id='hero'>
        <div className='xs:w-full xl:w-[1200px] mx-auto h-full flex items-center justify-center xs:flex-col lg:flex-row'>
          <div className='xs:w-[96%] mx-auto xl:w-full'>
            <motion.h1 
              variants={Fade('down',0.2)} 
              initial="hidden" 
              whileInView={"show"} 
              viewport={{ once : false, amount : .6}} className='xs:text-4xl xs:text-center xl:text-left xl:text-6xl font-semibold'>
              Explore the Finest <span className='text-[crimson]'>Global</span> Offers
            </motion.h1>
            <motion.p
              variants={Fade('down',.4)} 
              initial="hidden" 
              whileInView={"show"} 
              viewport={{ once : false, amount : .6}}
            className='my-4 xl:text-md xs:text-sm xs:mx-auto xl:mx-0 text-[#aaa] xs:text-center xl:text-left xs:w-11/12 xl:w-10/12'>
              Find the ideal ride for any adventure with our diverse range of affordable and depandable car rentals
            </motion.p>
            <motion.div
              variants={Fade('up',0.2)} 
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
          </div>
          <motion.div
            variants={Fade('up',0.2)} 
              initial="hidden" 
              whileInView={"show"} 
              viewport={{ once : false, amount : .6}}
          className='w-full xs:h-[30%] md:h-[60%] xl:h-full relative'>
            <Image src={'/bugatii.png'} alt='none' fill={true} className='w-full h-full object-contain' />  
          </motion.div>
        </div>
        {
          search ? (
            <motion.div
              initial={{y : '-100%'}}
              animate={{y : 0}}
              transition={{ease : easeInOut}}

            className={`rounded-none bg-white  xs:hidden lg:flex shadow-xl w-full fixed top-[56px] z-20 max-w-[1920px]`}>
              <Search />
            </motion.div>
          ):  (
            <motion.div
              variants={Fade('down',.8)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once : false, amount : .2}}
            className='rounded-xl px-2 bg-white xs:hidden lg:flex w-full shadow-md shadow-black max-w-[1200px] mx-auto z-[9999] -mt-10 relative'>
              <Search />
            </motion.div>
          )
        }
    </div>
  )
}

export default Hero