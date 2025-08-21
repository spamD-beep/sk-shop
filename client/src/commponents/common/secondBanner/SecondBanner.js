
import React, { useRef, useState } from 'react';
import banner5 from '../../../assets/img/banner5.webp';
import banner6 from '../../../assets/img/banner6.webp';
import banner7 from '../../../assets/img/banner7.webp';
import banner8 from '../../../assets/img/banner8.webp';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';
import { Navigation } from 'swiper/modules';
const SecondBanner = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={8}
       navigation={true} modules={[Navigation]}
  
        className="mySwiper swiperBanner"
      >
        <SwiperSlide className='cat'>
          <img src={banner5} />
          
          </SwiperSlide>
        <SwiperSlide className='cat'>
          <img src={banner6} />
         
        </SwiperSlide>
        <SwiperSlide className='cat'>
          <img src={banner8} />
         
        </SwiperSlide>
        <SwiperSlide className='cat'>
          <img src={banner7} />
         
        </SwiperSlide>
       

      </Swiper>
    </>
  )
}

export default SecondBanner
