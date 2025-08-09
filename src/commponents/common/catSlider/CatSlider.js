import React, { useRef, useState } from 'react';
import cat1 from '../../../assets/img/cat1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation } from 'swiper/modules';
const CatSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={20}
       navigation={true} modules={[Navigation]}
  
        className="mySwiper"
      >
        <SwiperSlide className='cat'>
          <img src={cat1}/>
          <span>Mobiles</span>
          </SwiperSlide>
        <SwiperSlide><img src={cat1}/></SwiperSlide>
        <SwiperSlide><img src={cat1}/></SwiperSlide>
        <SwiperSlide><img src={cat1}/></SwiperSlide>
        <SwiperSlide><img src={cat1}/></SwiperSlide>
        <SwiperSlide><img src={cat1}/></SwiperSlide>
        <SwiperSlide><img src={cat1}/></SwiperSlide>
        <SwiperSlide><img src={cat1}/></SwiperSlide>
        <SwiperSlide><img src={cat1}/></SwiperSlide>
      </Swiper>
    </>
  )
}

export default CatSlider
