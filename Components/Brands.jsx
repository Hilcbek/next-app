"use client"
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import { Fade } from '@/variants/variant'
let arrays = [
    '/ford.png',
    '/audi.png',
    '/mazda.png',
    '/bmw.png',
    '/mercedes.webp',
    '/mitsubishi.png',
    '/vols.webp'
]
const Brands = () => {
  return (
    <motion.div
    variants={Fade('down',0.4)} 
              initial="hidden" 
              whileInView={"show"} 
              viewport={{ once : false, amount : .6}}
    className='w-9/12 lg:h-[25vh] mx-auto flex items-center justify-center'>
        <div className='grid xs:grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7 w-full'>
            {
            arrays.map((img,idx) => (
                <div key={idx} className='relative w-full mx-2 h-20'>
                    <Image src={img} fill={true} className='img w-full h-full object-contain' alt='none' />
                </div>
            ))
        }
        </div>
    </motion.div>
  )
}

export default Brands