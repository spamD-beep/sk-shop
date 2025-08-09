import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../../assets/img/slider1.jpg'
import slider2 from '../../../assets/img/slider2.jpg'
import slider3 from '../../../assets/img/slider3.jpg'
import slider4 from '../../../assets/img/slider4.jpg'
import slider5 from '../../../assets/img/slider5.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';
import { Navigation } from 'swiper/modules';
const Slider = () => {
  return (
    <>
      <Swiper  spaceBetween={20} navigation={true} modules={[Navigation]} className="mySwiper" style={{padding:"10px 10px"}}>
        <SwiperSlide><img src={slider1} className='w-full'/></SwiperSlide>
        <SwiperSlide><img src={slider2} className='w-full'/></SwiperSlide>
        <SwiperSlide><img src={slider3} className='w-full'/></SwiperSlide>
        <SwiperSlide><img src={slider4} className='w-full'/></SwiperSlide>
        <SwiperSlide><img src={slider5} className='w-full'/></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider
