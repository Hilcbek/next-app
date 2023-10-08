"use client"
import React, { useEffect, useState } from 'react'
import {BiUpArrowAlt} from 'react-icons/bi'
import { Link } from 'react-scroll'
const BackToTop = () => {
    let [isActive,setIsActive] = useState(false);
    useEffect(() => {
        let handleScroll = () => {
            if(window.scrollY > 400){
                setIsActive(true)
            }else{
                setIsActive(false)
            }
        }

        window.addEventListener('scroll',handleScroll)

        return () => window.removeEventListener('scroll',handleScroll)
    },[])
  return (
    <div className={`${isActive ? 'scale-100' : 'scale-0'} transition-all ease-linear duration-400  fixed bottom-5 right-5`}>
        <Link to='hero' smooth={true} duration={800} delay={1000} className={`w-10 h-10 transition-all duration-500 flex items-center justify-center rounded-md text-white cursor-pointer hover:bg-white border-solid hover:text-[crimson] border-[1px] border-transparent hover:border-[crimson] bg-[crimson]`}>
            <BiUpArrowAlt />
        </Link>
    </div>
  )
}

export default BackToTop