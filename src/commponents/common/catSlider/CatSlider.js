import React, { useRef, useState } from 'react';
import cat1 from '../../../assets/img/cat1.jpg';
import cat2 from '../../../assets/img/cat2.jpg';
import cat3 from '../../../assets/img/cat3.jpg';
import cat4 from '../../../assets/img/cat4.jpg';
import cat5 from '../../../assets/img/cat5.jpg';
import cat6 from '../../../assets/img/cat6.jpg';
import cat7 from '../../../assets/img/cat7.jpg';
import cat8 from '../../../assets/img/cat8.jpg';
import cat9 from '../../../assets/img/cat9.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation } from 'swiper/modules';
const CatSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
       navigation={true} modules={[Navigation]}
  
        className="mySwiper"
      >
        <SwiperSlide className='cat'>
          <img src={cat9} />
          <span>Gloves</span>
          </SwiperSlide>
        <SwiperSlide className='cat'>
          <img src={cat2} />
          <span>Chairs</span>
        </SwiperSlide>
        <SwiperSlide className='cat'>
          <img src={cat3} />
          <span>Watches</span>
        </SwiperSlide>
        <SwiperSlide className='cat'>
          <img src={cat4} />
          <span>Shoes</span>
        </SwiperSlide>
        <SwiperSlide className='cat'>
          <img src={cat5} />
          <span>Baby Dress</span>
        </SwiperSlide>
        <SwiperSlide className='cat'>
          <img src={cat6} />
          <span>Purse</span>
        </SwiperSlide>
        <SwiperSlide className='cat'>
          <img src={cat7} />
          <span>Perfume</span>
        </SwiperSlide>
        <SwiperSlide className='cat'>
          <img src={cat8} />
          <span>Glasses</span>
        </SwiperSlide>
        <SwiperSlide className='cat'>
          <img src={cat1} />
          <span>Mobiles</span>
        </SwiperSlide>

      </Swiper>
    </>
  )
}

export default CatSlider
