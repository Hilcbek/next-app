import Image from 'next/image'
import React from 'react'
import { ImQuotesLeft } from 'react-icons/im'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Testlider = ({testimonials}) => {
  return (
    <Swiper
          pagination={{
            clickable : true,
            dynamicBullets : true
          }}
          modules={[Pagination]}
         className='lg:py-4 w-full flex items-center justify-center' id='testimonial'>
            {
                testimonials.map((test,idx) => (
                      <SwiperSlide key={idx} className='h-full xs:mt-40 lg:mt-80'>
                          <div className='w-full lg:mx-2 xs:shadow-md lg:shadow-none p-3 rounded-md flex items-center justify-center flex-col'>
                              <div className='w-full flex items-center justify-center'>
                                <ImQuotesLeft className='text-7xl mb-5 text-[crimson]'  />
                              </div>
                              <div className='text-md my-3 font-light text-center lg:w-6/12 mx-auto'>{test.message}</div>
                              <div className='w-11 h-11 rounded-full relative bg-gray-500'>
                                <Image src={test.avatar} className='rounded-full object-contain w-full h-full' fill={true} alt='none' />
                              </div>
                              <p className='mt-4 text-xs text-gray-500'>{test.job}</p>
                          </div>
                      </SwiperSlide>
                    )
                )
            }
        </Swiper>
  )
}

export default Testlider