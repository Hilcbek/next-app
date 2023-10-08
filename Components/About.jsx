"use client"
import Image from 'next/image'
import React from 'react'
import {Fade} from '@/variants/variant'
import { motion } from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import CountUp from 'react-countup'
const About = () => {
  let [ref,inView] = useInView({
    threshold : 0.5
  })
  return (
    <div ref={ref} className='xs:h-auto xs:flex-col lg:flex-row lg:h-screen flex items-center justify-center xs:w-[92%] lg:w-9/12 mx-auto py-10' id='about'>
      <motion.div
      variants={Fade('up',.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once : false, amount : .5}}
      className='w-full lg:mr-10 xs:h-[350px] lg:h-full relative'>
        <Image fill={true} className='w-full h-full object-contain' src={'/car.avif'} alt='none' />
      </motion.div>
      <div className='w-full lg:ml-10'>
        <motion.h1
        variants={Fade('down',.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once : false, amount : .5}}
        className='xs:text-3xl lg:text-4xl font-semibold'>Car services simplified.</motion.h1>
        <motion.p
        variants={Fade('down',.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once : false, amount : .5}}
        className='lg:w-9/12 text-sm text-gray-500 my-4'>Rent, choose, and with ease. Our component locations, diverse car types, and reliable repair points ensure a seamless car experiance.</motion.p>
        <div className='flex items-center xs:justify-center lg:justify-start mt-5'>
          <motion.div
          variants={Fade('down',.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once : false, amount : .5}}
          className='flex items-center justify-center flex-col xs:mr-1 lg:mr-3'>
            <div className="w-10 h-10 relative mb-2">
              <Image fill={true} className='w-full h-full object-contain' src={'/car.png'} alt='none' />
            </div>
            <p classname={'font-semibold'}>
              {
                inView ? (
                  <CountUp start={0} end={50} duration={3} delay={1} />
                ) : 
                  null
              }
              +
            </p>
            <p className='xs:text-[10px] lg:text-xs mt-2 text-gray-500 text-center tracking-wide'>CAR TYPES</p>
          </motion.div>
          <motion.div
          variants={Fade('down',.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once : false, amount : .5}}
          className='flex items-center justify-center flex-col mx-3'>
            <div className="w-10 h-10 relative mb-2">
              <Image fill={true} className='w-full h-full object-contain' src={'/house.png'} alt='none' />
            </div>
            <p classname={'font-semibold'}>
              {
                inView ? (
                  <CountUp start={0} end={189} duration={3} delay={1} />
                ) : 
                  null
              }
              +
            </p>
            <p className='xs:text-[10px] lg:text-xs mt-2 text-gray-500 text-center tracking-wide'>REPAIR OULETS</p>
          </motion.div>
          <motion.div
          variants={Fade('down',.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once : false, amount : .5}}
          className='flex items-center justify-center  flex-col mx-3'>
            <div className="w-10 h-10 relative mb-2">
              <Image fill={true} className='w-full h-full object-contain' src={'/gear.png'} alt='none' />
            </div>
            <p classname={'font-semibold'}>
              {
                inView ? (
                  <CountUp start={0} end={255} duration={3} delay={1} />
                ) : 
                  null
              }
              +
            </p>
            <p className='xs:text-[10px] lg:text-xs mt-2 text-gray-500 text-center tracking-wide'>RENTAIL POINTS</p>
          </motion.div>
        </div>
        <button className='xs:w-11/12 hover:bg-transparent hover:text-[crimson] border-solid border-[1px] border-transparent hover:border-[crimson] transition-all duration-500 mx-auto lg:mx-0 lg:w-6/12 xs:mt-4 lg:mt-8 block my-2 tracking-wider text-xs text-[#eee] p-4 bg-[crimson] rounded-md'>SEE ALL CARS</button>
      </div>
    </div>
  )
}

export default About