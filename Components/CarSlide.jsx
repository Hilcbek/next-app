"use client"
import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { FaStar } from 'react-icons/fa'
import { Fade } from '@/variants/variant'
import { motion } from 'framer-motion'
import Image from 'next/image'
let Cars = [
    {
        img : '/pickup.png',
        name : 'Hilux Pick-Up',
        brand : 'Pick-Up',
        day : '23/day',
        stars : 3.5,
        info : [
                {
                    icon : '/manual.png',
                    type : 'MANUAL'
                },
                {
                    icon : '/seat.png',
                    type : '5 SEAT'
                },
                {
                    icon : '/gas.png',
                    type : 'GAS'
                },
                {
                    icon : '/horse.png',
                    type : '1600 HP'
                },
                {
                    icon : '/guage.png',
                    type : 'FRONT'
                }
            ]
        },
        {
        img : '/suv.webp',
        name : 'Audi',
        brand : 'SUV-SPORTS',
        day : '43/day',
        stars : 4.5,
        info : [
                {
                    icon : '/manual.png',
                    type : 'MANUAL'
                },
                {
                    icon : '/seat.png',
                    type : '5 SEAT'
                },
                {
                    icon : '/gas.png',
                    type : 'GAS'
                },
                {
                    icon : '/horse.png',
                    type : '1600 HP'
                },
                {
                    icon : '/guage.png',
                    type : 'FRONT'
                }
            ]
        },
        {
        img : '/tesla.avif',
        name : 'TESELA - ELECTRIC',
        brand : 'ELEC',
        day : '21/day',
        stars : 3.5,
        info : [
                {
                    icon : '/manual.png',
                    type : 'MANUAL'
                },
                {
                    icon : '/seat.png',
                    type : '5 SEAT'
                },
                {
                    icon : '/gas.png',
                    type : 'GAS'
                },
                {
                    icon : '/horse.png',
                    type : '1600 HP'
                },
                {
                    icon : '/guage.png',
                    type : 'FRONT'
                }
            ]
        },
        {
        img : '/truck.png',
        name : 'Iveco',
        brand : 'TRUCK',
        day : '99/day',
        stars : 5,
        info : [
             {
                    icon : '/manual.png',
                    type : 'MANUAL'
                },
                {
                    icon : '/seat.png',
                    type : '5 SEAT'
                },
                {
                    icon : '/gas.png',
                    type : 'GAS'
                },
                {
                    icon : '/horse.png',
                    type : '1600 HP'
                },
                {
                    icon : '/guage.png',
                    type : 'FRONT'
                }
            ]
        },
        {
        img : '/tucson.webp',
        name : 'TUCSON',
        brand : 'SUV',
        day : '39/day',
        stars : 2.5,
        info : [
                {
                    icon : '/manual.png',
                    type : 'MANUAL'
                },
                {
                    icon : '/seat.png',
                    type : '5 SEAT'
                },
                {
                    icon : '/gas.png',
                    type : 'GAS'
                },
                {
                    icon : '/horse.png',
                    type : '1600 HP'
                },
                {
                    icon : '/guage.png',
                    type : 'FRONT'
                }
            ]
        }
]
const CarSlide = () => {
  return (
    <motion.div
              variants={Fade('up',0.6)} 
              initial="hidden" 
              whileInView={"show"} 
              viewport={{ once : false, amount : .6}}
             className='xs:w-11/12 lg:w-9/12 mx-auto'>
        <Swiper breakpoints={{
            320 : {slidesPerView : 1, spaceBetween : 15},
            640 : {slidesPerView : 2, spaceBetween : 32},
            1260 : {slidesPerView : 3, spaceBetween : 32},
        }} className='py-4'>
            {
                Cars.map((car,idx) => {
                    return <SwiperSlide key={idx} className='h-fit p-2 lg:shadow-none xs:shadow-md my-1 max-w-[385px] '>
                        <div className='relative xs:w-[300px] lg:w-[384px] h-[204px]'>
                            <Image src={car.img} className='w-full h-full object-contain' fill={true} alt='none' />
                        </div>
                        <div className='w-11/12 mx-auto'>
                            <div className='w-full flex items-center justify-between'>
                                <h1 className='text-xs font-bold text-[#aaa]'>{car.brand}</h1>
                                <p className='text-xs font-bold flex items-center justify-start'>
                                   <FaStar className='ml-1 text-[crimson]' />
                                   <FaStar className='ml-1 text-[crimson]' />
                                   <FaStar className='ml-1 text-[crimson]' />
                                   <FaStar className='ml-1 text-[crimson]' />
                                   <FaStar className='ml-1 text-[crimson]' />
                                </p>
                            </div>
                            <h1 className='font-bold text-sm'>{car.name}</h1>
                            <p className='text-[crimson] font-bold text-xs'>{car.day}</p>
                            <div className='flex items-center my-5 justify-start'>
                                {
                                    car.info.map((data,idx) => (
                                        <div key={idx} className='flex lg:mr-3 items-center justify-center flex-col w-full'>
                                            <div className='flex items-center justify-center rounded-full border-solid border-black border-[1px] shadow-sm xs:w-10  lg:w-11 xs:h-11 lg:h-11 mx-2 relative'>
                                                <Image src={data.icon} alt='none' fill={true} className=' w-[99%] h-[99%] object-contain' />
                                            </div>
                                            <p className='text-[11px] text-black/70 mt-1 font-semibold'>{data.type}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <button className='w-full mx-auto hover:bg-transparent hover:text-[crimson] border-solid border-[1px] border-transparent hover:border-[crimson] transition-all duration-500 block my-2 tracking-wider text-xs text-[#eee] p-4 bg-[crimson] rounded-md'>SEE DETAILS</button>
                        </div>
                    </SwiperSlide>
                })
            }
        </Swiper>
    </motion.div>
  )
}

export default CarSlide