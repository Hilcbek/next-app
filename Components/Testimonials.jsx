"use client"
import React from 'react'
import {ImQuotesLeft} from 'react-icons/im'
import {motion} from 'framer-motion'
import { SwiperSlide,Swiper } from 'swiper/react'
import {Pagination} from 'swiper/modules'
import Image from 'next/image'
import { Fade } from '@/variants/variant'
import Testlider from './Testlider'
let testimonials = [
  {
    message : 'I recently had the immense pleasure of driving a Ferrari, and it was nothing short of a transcendental experience. From the moment I laid eyes on this work of art, I knew I was in for something extraordinary.',
    avatar : '/testimonials/ava_1.webp',
    name : 'Bereket Alemayehu',
    job : 'Programmer (Full-Stack Developer)'
  },
  {
    message : 'The handling of the Ferrari is a ballet of precision and grace. It hugs corners with a confidence that borders on the supernatural, making every twist and turn a dance of harmonious motion. The responsiveness of the steering and the impeccable suspension system ensure a ride that feels like a seamless connection between man and machine.',
    avatar : '/testimonials/ava_2.jpg',
    name : 'Bereket Alemayehu',
    job : 'Grapchics Designer'
  },
  {
    message : 'What truly sets Ferrari apart, however, is the soulful connection it establishes with its driver. It`s not just a car; it`s a partner in the pursuit of automotive excellence. Every gear change, every pulse of the throttle, is a dialogue between you and the machine, a symphony of mutual understanding.',
    avatar : '/testimonials/ava_3.webp',
    name : 'Bereket Alemayehu',
    job : 'MERN-STACK DEVELOPER'
  },
  {
    message : 'In the realm of automotive brilliance, Ferrari stands as a beacon of unparalleled achievement. It`s a testament to the passion, innovation, and dedication of the craftsmen who breathe life into these magnificent machines. Driving a Ferrari is not a mere experience; it`s a revelation, an affirmation that the pursuit of perfection knows no bounds.',
    avatar : '/testimonials/ava_4.jpg',
    name : 'Bereket Alemayehu',
    job : 'Teacher'
  }
]
const Testimonials = () => {
  return (
    <div className='xs:w-11/12 lg:w-9/12 mx-auto'>
        <Testlider testimonials={testimonials} />
    </div>
  )
}

export default Testimonials