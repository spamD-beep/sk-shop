import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../../assets/img/slider1.jpg'
import slider2 from '../../../assets/img/slider2.jpg'
import slider3 from '../../../assets/img/slider3.jpg'
import slider4 from '../../../assets/img/slider4.jpg'
import slider5 from '../../../assets/img/slider5.jpg'
import { useGetAllBannersQuery } from '../../../api/bannerApi';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './style.css';
import { Navigation , Autoplay} from 'swiper/modules';
const Slider = () => {
 const {data:banners=[], isLoading, isError} = useGetAllBannersQuery();

  return (
    <>
      <Swiper
        spaceBetween={20}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000, // har slide ka delay (3 seconds)
          disableOnInteraction: false // user interact kare to bhi autoplay band na ho
        }}
        loop={true} // infinite loop
        className="sliderback"
        style={{ padding: "10px 10px" }}
      >{
        banners.map((product,index)=>(

          <SwiperSlide key={index}><img src={product.image.url} className='w-full'/></SwiperSlide>
        ))
      }
        
      </Swiper>
    </>
  )
}

export default Slider
