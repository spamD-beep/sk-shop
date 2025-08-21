import React, { useRef, useState } from 'react';
import cat1 from '../../../assets/img/cat1.png';
import cat2 from '../../../assets/img/cat2.png';
import cat3 from '../../../assets/img/cat3.png';
import cat4 from '../../../assets/img/cat4.png';
import cat5 from '../../../assets/img/cat5.png';
import cat6 from '../../../assets/img/cat6.png';
import cat7 from '../../../assets/img/cat7.png';
import cat8 from '../../../assets/img/cat8.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation } from 'swiper/modules';
const CatSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={8}
        spaceBetween={10}
       navigation={true} modules={[Navigation]}
  
        className="mySwiper swiperCat"
      >
        <SwiperSlide className='cat'>
          <img src={cat1} style={{width:"70px",height:"70px"}} />
          <span>Fashions</span>
          </SwiperSlide>
        <SwiperSlide className='cat'>
          <img src={cat2} style={{width:"70px",height:"70px"}} />
          <span>Electronics</span>
        </SwiperSlide>
        <SwiperSlide className='cat'>
          <img src={cat3} style={{width:"70px",height:"70px"}} />
          <span>Bags</span>
        </SwiperSlide>
        <SwiperSlide className='cat'>
          <img src={cat4} style={{width:"70px",height:"70px"}}  />
          <span>Footwear</span>
        </SwiperSlide>
        <SwiperSlide className='cat'>
          <img src={cat5} style={{width:"70px",height:"70px"}} />
          <span>Groceries</span>
        </SwiperSlide>
        <SwiperSlide className='cat'>
          <img src={cat6} style={{width:"70px",height:"70px"}} />
          <span>Beauty</span>
        </SwiperSlide>
        <SwiperSlide className='cat'>
          <img src={cat7} style={{width:"70px",height:"70px"}}/>
          <span>Wellness</span>
        </SwiperSlide>
        <SwiperSlide className='cat'>
          <img src={cat8}style={{width:"70px",height:"70px"}} />
          <span>Jewelery</span>
        </SwiperSlide>

      </Swiper>
    </>
  )
}

export default CatSlider
