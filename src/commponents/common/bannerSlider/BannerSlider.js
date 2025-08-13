
import React, { useRef, useState } from 'react';
import banner1 from '../../../assets/img/banner1.jpg';
import banner2 from '../../../assets/img/banner2.png';
import banner3 from '../../../assets/img/banner3.jpg';
import banner4 from '../../../assets/img/banner4.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';
import { Navigation } from 'swiper/modules';
const BannerSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={8}
       navigation={true} modules={[Navigation]}
  
        className="mySwiper swiperBanner"
      >
        <SwiperSlide className='cat'>
          <img src={banner1} />
          <div className='textBanner'>
            <div style={{fontSize:"14pt"}}>Buy women products with low price</div>
            <div style={{color:"red",fontSize:"15pt",fontWeight:"bold"}}>$999</div>
            <a href="#" style={{color:"black",fontSize:"15pt"}}>SHOP NOW</a>
          </div>
          </SwiperSlide>
        <SwiperSlide className='cat'>
          <img src={banner2} />
         <div className='textBanner2'>
            <div style={{fontSize:"14pt"}}>Buy Men's Bags with low price</div>
            <div style={{color:"red",fontSize:"15pt",fontWeight:"bold"}}>$900</div>
            <a href="#" style={{color:"black",fontSize:"15pt"}}>SHOP NOW</a>
          </div>
        </SwiperSlide>
        <SwiperSlide className='cat'>
          <img src={banner3} />
         <div className='textBanner2'>
            <div style={{fontSize:"14pt"}}>Buy  Apple Iphone</div>
            <div style={{color:"red",fontSize:"15pt",fontWeight:"bold"}}>$45000</div>
            <a href="#" style={{color:"black",fontSize:"15pt"}}>SHOP NOW</a>
          </div>
        </SwiperSlide>
        <SwiperSlide className='cat'>
          <img src={banner4} />
         <div className='textBanner'>
            <div style={{fontSize:"14pt"}}>Buy Men's Footwear with low price</div>
            <div style={{color:"red",fontSize:"15pt",fontWeight:"bold"}}>$45000</div>
            <a href="#" style={{color:"black",fontSize:"15pt"}}>SHOP NOW</a>
          </div>
        </SwiperSlide>
       

      </Swiper>
    </>
  )
}

export default BannerSlider
