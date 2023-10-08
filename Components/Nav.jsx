"use client"
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';
import {HiMenuAlt3} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import { SearchContext } from '@/Context/SearchContext';
import Search_Mobile from './Search_Mobile';
const Nav = () => {
    let [scroll,setScroll] = useState(false);
    let desptop = useMediaQuery({
        query : '(min-width : 1300px)',
    })
    let desptop2 = useMediaQuery({
        query : '(max-width : 1024px)',
    })
    let {setSearch} = useContext(SearchContext);
    useEffect(() => {
        let Scroll = () => {
            if(window.scrollY > 40) {
                setScroll(true)
            }
            else {
                setScroll(false)
            }
            if(window.scrollY > 650){
                setSearch(true)
            }else{
                setSearch(false)
            }
        }

        window.addEventListener('scroll',Scroll)

        return () => window.removeEventListener('scroll',Scroll)
    },[])
    let [open,setOpen] = useState(false)
  return (
    <header
        className={`${(scroll || open) ? 'bg-white shadow-md py-2' : 'bg-transparent shadow-none py-4'} fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
        <div className='xl:w-9/12 mx-auto flex-col flex  lg:flex-row lg:items-center lg:justify-between'>
           <div className='w-full flex items-center justify-between px-4 cursor-pointer'>
                <Link to='hero' activeClass='active' spy={true} smooth={desptop}>
                    <div className='w-20 h-10 relative'>
                        <Image fill={true} className='w-full h-full object-contain' src={'/logo.png'} alt='none' />
                    </div>
                </Link>
                <div onClick={() => setOpen(!open)} className='lg:hidden xs:flex text-xl cursor-pointer hover:bg-[#eee] transition-all duration-150 ease-linear w-10 h-10 rounded-full flex items-center justify-center'>
                    {!open ? <HiMenuAlt3 /> :  <AiOutlineClose />}
                </div>
           </div>
           <nav className={`${open ? 'max-h-max py-8 lg:py-0' : 'max-h-0 lg:max-h-max'} w-full  overflow-hidden ease-linear z-10 transition-all duration-150 flex items-center justify-center lg:flex-row xs:flex-col`}>
                <Link onClick={() => {!desptop && setOpen(!open)}} delay={500} duration={900}  className='button xs:my-3 lg:my-0 cursor-pointer hover:text-black/80 transition-all duration-150 ease-linear lg:mr-4 font-semibold text-xs' to='hero'  smooth={desptop} activeClass="active" spy={true}>
                        HOME
                </Link>
                <Link onClick={() => {!desptop && setOpen(!open)}} delay={500} duration={900} className='button xs:my-3 lg:my-0 cursor-pointer hover:text-black/80 transition-all duration-150 ease-linear mx-4 font-semibold text-xs' to='cars' smooth={desptop} activeClass="active" spy={true}>
                        CARS
                </Link>
                <Link onClick={() => {!desptop && setOpen(!open)}} delay={500} duration={900} className='button xs:my-3 lg:my-0 cursor-pointer hover:text-black/80 transition-all duration-150 ease-linear mx-4 font-semibold text-xs about' to='about' smooth={desptop} activeClass="active" spy={true}>
                        ABOUT
                </Link>
                <Link onClick={() => {!desptop && setOpen(!open)}} delay={500} duration={900} className='button xs:my-3 lg:my-0 cursor-pointer hover:text-black/80 transition-all duration-150 ease-linear mx-4 font-semibold text-xs' to='why_us' smooth={desptop} activeClass="active" spy={true}>
                        WHY US
                </Link>
                <Link onClick={() => {!desptop && setOpen(!open)}} delay={500} duration={900} className='button xs:my-3 lg:my-0 cursor-pointer hover:text-black/80 transition-all duration-150 ease-linear mx-4 font-semibold text-xs' to='testimonial' smooth={desptop} activeClass="active" spy={true}>
                        TESTIMONIALS
                </Link>
                <Link onClick={() => {!desptop && setOpen(!open)}} delay={500} duration={900} className='button xs:my-3 lg:my-0 cursor-pointer hover:text-black/80 transition-all duration-150 ease-linear mx-4 font-semibold text-xs' to='contact' smooth={desptop} activeClass="active" spy={true}>
                    CONTACT
                </Link>
                <Link onClick={() => {!desptop && setOpen(!open)}} delay={500} duration={900} className='button xs:my-3 bg-primary lg:hidden text-white rounded-[15px] p-3 lg:my-0 cursor-pointer transition-all duration-150 ease-linear lg:ml-4 font-semibold text-xs' to='Hero' smooth={desptop} activeClass="active" spy={true}>
                        SEE ALL CARS
                </Link>
                {desptop2 && <Search_Mobile />}
           </nav>
        </div>
    </header>
  )
}

export default Nav
/**                     */