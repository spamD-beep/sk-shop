import React, { useState } from 'react';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { Navigation } from 'swiper/modules';
import cat3 from '../../../assets/img/cat3.jpg';
import "../../../css/style.css"

const ElectronSlider = () => {
  const [value, setValue] = useState(2); // default rating
  const [hover, setHover] = useState(-1); // hover state

  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }

  return (
    <div>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="proSwiper"
      >
        <SwiperSlide className="promain">
        <div className='discount'>10%</div>
          <img src={cat3} style={{ height: '100%',width:"100%" }} alt="Product" />
          <div style={{padding:"5px",paddingBottom:"10px", display:"flex",flexDirection:"column",gap:"2px"}}>
          <div style={{ color: 'gray', fontSize: '10pt' }}>Soylent Green</div>
          <div style={{ color: 'black', fontSize: '10pt', padding: '0px' }}>
            Siril Georgette Pink Color Saree with Blouse piece
          </div>
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            style={{fontSize:"12pt"}}
            onChange={(event, newValue) => {
              setValue(newValue);
              
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <div className='price' style={{display:"flex",width:"100%",justifyContent:"space-between",gap:"10px"}}>
            <div style={{color:"gray",fontSize:"10pt",textDecoration:"line-through"}}>$%50.00</div>
            <div style={{color:"red",fontSize:"10pt"}}>$%58.00</div>
          </div>
          <div className='addToCard' style={{fontSize:"10pt",border:"1px solid red",padding:"10px",textAlign:"center",display:"flex",gap:"10px",justifyContent:"center"}}>
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            ADD TO CART
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="promain">
        <div className='discount'>10%</div>
          <img src={cat3} style={{ height: '100%',width:"100%" }} alt="Product" />
          <div style={{padding:"5px",paddingBottom:"10px", display:"flex",flexDirection:"column",gap:"2px"}}>
          <div style={{ color: 'gray', fontSize: '10pt' }}>Soylent Green</div>
          <div style={{ color: 'black', fontSize: '10pt', padding: '0px' }}>
            Siril Georgette Pink Color Saree with Blouse piece
          </div>
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            style={{fontSize:"12pt"}}
            onChange={(event, newValue) => {
              setValue(newValue);
              
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <div className='price' style={{display:"flex",width:"100%",justifyContent:"space-between",gap:"10px"}}>
            <div style={{color:"gray",fontSize:"10pt",textDecoration:"line-through"}}>$%50.00</div>
            <div style={{color:"red",fontSize:"10pt"}}>$%58.00</div>
          </div>
          <div className='addToCard' style={{fontSize:"10pt",border:"1px solid red",padding:"10px",textAlign:"center",display:"flex",gap:"10px",justifyContent:"center"}}>
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            ADD TO CART
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="promain">
        <div className='discount'>10%</div>
          <img src={cat3} style={{ height: '100%',width:"100%" }} alt="Product" />
          <div style={{padding:"5px",paddingBottom:"10px", display:"flex",flexDirection:"column",gap:"2px"}}>
          <div style={{ color: 'gray', fontSize: '10pt' }}>Soylent Green</div>
          <div style={{ color: 'black', fontSize: '10pt', padding: '0px' }}>
            Siril Georgette Pink Color Saree with Blouse piece
          </div>
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            style={{fontSize:"12pt"}}
            onChange={(event, newValue) => {
              setValue(newValue);
              
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <div className='price' style={{display:"flex",width:"100%",justifyContent:"space-between",gap:"10px"}}>
            <div style={{color:"gray",fontSize:"10pt",textDecoration:"line-through"}}>$%50.00</div>
            <div style={{color:"red",fontSize:"10pt"}}>$%58.00</div>
          </div>
          <div className='addToCard' style={{fontSize:"10pt",border:"1px solid red",padding:"10px",textAlign:"center",display:"flex",gap:"10px",justifyContent:"center"}}>
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            ADD TO CART
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="promain">
        <div className='discount'>10%</div>
          <img src={cat3} style={{ height: '100%',width:"100%" }} alt="Product" />
          <div style={{padding:"5px",paddingBottom:"10px", display:"flex",flexDirection:"column",gap:"2px"}}>
          <div style={{ color: 'gray', fontSize: '10pt' }}>Soylent Green</div>
          <div style={{ color: 'black', fontSize: '10pt', padding: '0px' }}>
            Siril Georgette Pink Color Saree with Blouse piece
          </div>
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            style={{fontSize:"12pt"}}
            onChange={(event, newValue) => {
              setValue(newValue);
              
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <div className='price' style={{display:"flex",width:"100%",justifyContent:"space-between",gap:"10px"}}>
            <div style={{color:"gray",fontSize:"10pt",textDecoration:"line-through"}}>$%50.00</div>
            <div style={{color:"red",fontSize:"10pt"}}>$%58.00</div>
          </div>
          <div className='addToCard' style={{fontSize:"10pt",border:"1px solid red",padding:"10px",textAlign:"center",display:"flex",gap:"10px",justifyContent:"center"}}>
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            ADD TO CART
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="promain">
        <div className='discount'>10%</div>
          <img src={cat3} style={{ height: '100%',width:"100%" }} alt="Product" />
          <div style={{padding:"5px",paddingBottom:"10px", display:"flex",flexDirection:"column",gap:"2px"}}>
          <div style={{ color: 'gray', fontSize: '10pt' }}>Soylent Green</div>
          <div style={{ color: 'black', fontSize: '10pt', padding: '0px' }}>
            Siril Georgette Pink Color Saree with Blouse piece
          </div>
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            style={{fontSize:"12pt"}}
            onChange={(event, newValue) => {
              setValue(newValue);
              
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <div className='price' style={{display:"flex",width:"100%",justifyContent:"space-between",gap:"10px"}}>
            <div style={{color:"gray",fontSize:"10pt",textDecoration:"line-through"}}>$%50.00</div>
            <div style={{color:"red",fontSize:"10pt"}}>$%58.00</div>
          </div>
          <div className='addToCard' style={{fontSize:"10pt",border:"1px solid red",padding:"10px",textAlign:"center",display:"flex",gap:"10px",justifyContent:"center"}}>
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            ADD TO CART
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="promain">
        <div className='discount'>10%</div>
          <img src={cat3} style={{ height: '100%',width:"100%" }} alt="Product" />
          <div style={{padding:"5px",paddingBottom:"10px", display:"flex",flexDirection:"column",gap:"2px"}}>
          <div style={{ color: 'gray', fontSize: '10pt' }}>Soylent Green</div>
          <div style={{ color: 'black', fontSize: '10pt', padding: '0px' }}>
            Siril Georgette Pink Color Saree with Blouse piece
          </div>
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            style={{fontSize:"12pt"}}
            onChange={(event, newValue) => {
              setValue(newValue);
              
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <div className='price' style={{display:"flex",width:"100%",justifyContent:"space-between",gap:"10px"}}>
            <div style={{color:"gray",fontSize:"10pt",textDecoration:"line-through"}}>$%50.00</div>
            <div style={{color:"red",fontSize:"10pt"}}>$%58.00</div>
          </div>
          <div className='addToCard' style={{fontSize:"10pt",border:"1px solid red",padding:"10px",textAlign:"center",display:"flex",gap:"10px",justifyContent:"center"}}>
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            ADD TO CART
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="promain">
        <div className='discount'>10%</div>
          <img src={cat3} style={{ height: '100%',width:"100%" }} alt="Product" />
          <div style={{padding:"5px",paddingBottom:"10px", display:"flex",flexDirection:"column",gap:"2px"}}>
          <div style={{ color: 'gray', fontSize: '10pt' }}>Soylent Green</div>
          <div style={{ color: 'black', fontSize: '10pt', padding: '0px' }}>
            Siril Georgette Pink Color Saree with Blouse piece
          </div>
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            style={{fontSize:"12pt"}}
            onChange={(event, newValue) => {
              setValue(newValue);
              
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <div className='price' style={{display:"flex",width:"100%",justifyContent:"space-between",gap:"10px"}}>
            <div style={{color:"gray",fontSize:"10pt",textDecoration:"line-through"}}>$%50.00</div>
            <div style={{color:"red",fontSize:"10pt"}}>$%58.00</div>
          </div>
          <div className='addToCard' style={{fontSize:"10pt",border:"1px solid red",padding:"10px",textAlign:"center",display:"flex",gap:"10px",justifyContent:"center"}}>
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            ADD TO CART
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="promain">
        <div className='discount'>10%</div>
          <img src={cat3} style={{ height: '100%',width:"100%" }} alt="Product" />
          <div style={{padding:"5px",paddingBottom:"10px", display:"flex",flexDirection:"column",gap:"2px"}}>
          <div style={{ color: 'gray', fontSize: '10pt' }}>Soylent Green</div>
          <div style={{ color: 'black', fontSize: '10pt', padding: '0px' }}>
            Siril Georgette Pink Color Saree with Blouse piece
          </div>
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            style={{fontSize:"12pt"}}
            onChange={(event, newValue) => {
              setValue(newValue);
              
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <div className='price' style={{display:"flex",width:"100%",justifyContent:"space-between",gap:"10px"}}>
            <div style={{color:"gray",fontSize:"10pt",textDecoration:"line-through"}}>$%50.00</div>
            <div style={{color:"red",fontSize:"10pt"}}>$%58.00</div>
          </div>
          <div className='addToCard' style={{fontSize:"10pt",border:"1px solid red",padding:"10px",textAlign:"center",display:"flex",gap:"10px",justifyContent:"center"}}>
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            ADD TO CART
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="promain">
        <div className='discount'>10%</div>
          <img src={cat3} style={{ height: '100%',width:"100%" }} alt="Product" />
          <div style={{padding:"5px",paddingBottom:"10px", display:"flex",flexDirection:"column",gap:"2px"}}>
          <div style={{ color: 'gray', fontSize: '10pt' }}>Soylent Green</div>
          <div style={{ color: 'black', fontSize: '10pt', padding: '0px' }}>
            Siril Georgette Pink Color Saree with Blouse piece
          </div>
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            style={{fontSize:"12pt"}}
            onChange={(event, newValue) => {
              setValue(newValue);
              
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <div className='price' style={{display:"flex",width:"100%",justifyContent:"space-between",gap:"10px"}}>
            <div style={{color:"gray",fontSize:"10pt",textDecoration:"line-through"}}>$%50.00</div>
            <div style={{color:"red",fontSize:"10pt"}}>$%58.00</div>
          </div>
          <div className='addToCard' style={{fontSize:"10pt",border:"1px solid red",padding:"10px",textAlign:"center",display:"flex",gap:"10px",justifyContent:"center"}}>
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            ADD TO CART
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="promain">
        <div className='discount'>10%</div>
          <img src={cat3} style={{ height: '100%',width:"100%" }} alt="Product" />
          <div style={{padding:"5px",paddingBottom:"10px", display:"flex",flexDirection:"column",gap:"2px"}}>
          <div style={{ color: 'gray', fontSize: '10pt' }}>Soylent Green</div>
          <div style={{ color: 'black', fontSize: '10pt', padding: '0px' }}>
            Siril Georgette Pink Color Saree with Blouse piece
          </div>
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            style={{fontSize:"12pt"}}
            onChange={(event, newValue) => {
              setValue(newValue);
              
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <div className='price' style={{display:"flex",width:"100%",justifyContent:"space-between",gap:"10px"}}>
            <div style={{color:"gray",fontSize:"10pt",textDecoration:"line-through"}}>$%50.00</div>
            <div style={{color:"red",fontSize:"10pt"}}>$%58.00</div>
          </div>
          <div className='addToCard' style={{fontSize:"10pt",border:"1px solid red",padding:"10px",textAlign:"center",display:"flex",gap:"10px",justifyContent:"center"}}>
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            ADD TO CART
          </div>
          </div>
        </SwiperSlide>
       
        
      </Swiper>
    </div>
  );
};

export default ElectronSlider;
