import React, { useState } from 'react';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { CiHeart } from "react-icons/ci";
import { MdOutlineZoomOutMap, MdClose } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Navigation } from 'swiper/modules';

import cat3 from '../../../assets/img/cat3.jpg';
import cat4 from '../../../assets/img/cat4.jpg';
import cat5 from '../../../assets/img/cat5.jpg';
import cat6 from '../../../assets/img/cat6.jpg';
import cat7 from '../../../assets/img/cat7.jpg';
import cat8 from '../../../assets/img/cat8.jpg';
import cat9 from '../../../assets/img/cat9.jpg';

const FeaturedSlider = () => {
  const [value, setValue] = useState(2); 
  const [hover, setHover] = useState(-1);

  // ✅ Popup states
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  const products = [
    {
      id: 1,
      img: cat3,
      discount: "10%",
      brand: "Soylent Green",
      title: "Siril Georgette Pink Color Saree with Blouse piece",
      oldPrice: 50,
      newPrice: 58
    },
    {
      id: 2,
      img: cat4,
      discount: "20%",
      brand: "Nike",
      title: "Galaxy Smartwatch with Fitness Tracker",
      oldPrice: 120,
      newPrice: 95
    },
    {
      id: 3,
      img: cat5,
      discount: "15%",
      brand: "Adidas",
     title: "Galaxy Smartwatch with Fitness Tracker",
      oldPrice: 40,
      newPrice: 32
    },
    {
      id: 4,
      img: cat6,
      discount: "25%",
      brand: "Samsung",
      title: "Galaxy Smartwatch with Fitness Tracker",
      oldPrice: 300,
      newPrice: 225
    },
    {
      id: 5,
      img: cat7,
      discount: "5%",
      brand: "Apple",
      title: "Galaxy Smartwatch with Fitness Tracker",
      oldPrice: 1300,
      newPrice: 1235
    },
    {
      id: 6,
      img: cat8,
      discount: "30%",
      brand: "Levi's",
      title: "Galaxy Smartwatch with Fitness Tracker",
      oldPrice: 150,
      newPrice: 105
    },
    {
      id: 7,
      img: cat9,
      discount: "18%",
      brand: "Sony",
      title: "Galaxy Smartwatch with Fitness Tracker",
      oldPrice: 250,
      newPrice: 205
    }
  ];
  
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

  // ✅ Functions
  const handleClosePopup = () => setSelectedProduct(null);
  const handleAddToCart = () => {
    alert(`${selectedProduct.title} (${quantity}x) Added to Cart!`);
  };

  return (
    <div>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="proSwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="promain">
            <div className='discount'>{product.discount}</div>
            <div className='imgItem'>
              <img src={product.img} style={{ height: '100%', width: "100%" }} alt={product.title} />
              <div className='icons'>
                <div 
                  style={{ width: "30px", height: "30px", textAlign: "center", background: "white", borderRadius: "50%", boxShadow: "1px 1px 15px gray" }}
                  onClick={() => setSelectedProduct(product)}
                >
                  <MdOutlineZoomOutMap style={{ fontSize: "14pt", fontWeight: "600", cursor: "pointer" }} />
                </div>
                <div style={{ width: "30px", height: "30px", textAlign: "center", background: "white", borderRadius: "50%", boxShadow: "1px 1px 15px gray" }}>
                  <CiHeart style={{ fontSize: "14pt", fontWeight: "600", cursor: "pointer" }} />
                </div>
                <div style={{ width: "30px", height: "30px", textAlign: "center", background: "white", borderRadius: "50%", boxShadow: "1px 1px 15px gray" }}>
                  <IoIosGitCompare style={{ fontSize: "14pt", fontWeight: "600", cursor: "pointer" }} />
                </div>
              </div>
            </div>
            <div style={{ padding: "8px",  display: "flex", flexDirection: "column", gap: "7px" }}>
              <div style={{ color: 'gray', fontSize: '10pt' }}>{product.brand}</div>
              <div style={{ color: 'black', fontSize: '10pt', padding: '0px' }}>
                {product.title}
              </div>
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                style={{ fontSize: "12pt" }}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              <div className='price' style={{ display: "flex", width: "100%", justifyContent: "space-between", gap: "10px" }}>
                <div style={{ color: "gray", fontSize: "10pt", textDecoration: "line-through" }}>${product.oldPrice}</div>
                <div style={{ color: "red", fontSize: "10pt" }}>${product.newPrice}</div>
              </div>
              <div className='addToCard' style={{ fontSize: "10pt", border: "1px solid red", padding: "10px", textAlign: "center", display: "flex", gap: "10px", justifyContent: "center" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shopping-cart-icon lucide-shopping-cart"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                ADD TO CART
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Popup Modal */}
      {selectedProduct && (
        <div className="popup-overlay">
          <div className="product-popup">
            <button className="close-btn" onClick={handleClosePopup}>
              <MdClose />
            </button>
            
            <div className="popup-content">
              <div className="popup-image">
                <img src={selectedProduct.img} alt={selectedProduct.title} />
              </div>
              
              <div className="popup-details">
                <h2>{selectedProduct.title}</h2>
                
                <div className="brand-rating">
                  <span className="brand">Brand: {selectedProduct.brand}</span>
                  <span className="rating">★★★★★ <span className="review-count">(2)</span></span>
                </div>
                
                <div className="pricing">
                  <span className="current-price">${selectedProduct.newPrice}</span>
                  <span className="original-price">${selectedProduct.oldPrice}</span>
                  <span className="discount">({selectedProduct.discount} OFF)</span>
                </div>
                
                <div className="stock-info">
                  <span className="in-stock">Available In Stock: 7469 items</span>
                </div>
                
                <div className="product-description">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  </p>
                </div>
                
                <div className="size-selection">
                  <h3>SIZE:</h3>
                  <div className="size-options">
                    {['S', 'M', 'L', 'XL'].map(size => (
                      <button
                        key={size}
                        className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="shiping-info">
                  <span className="shiping">Free Shipping (2-3 Days)</span>
                </div>
                
                <div className="quantity-selection">
                  <label htmlFor="quantity">Quantity:</label>
                  <input
                    id="quantity"
                    type="number"
                    min="1"
                    max="10"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  />
                </div>
                
                <div className="action-buttons">
                  <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    ADD TO CART
                  </button>
                  
                  <div className="secondary-actions">
                    <button className="wishlist-btn">
                      ❤️ Add to Wishlist
                    </button>
                    <button className="compare-btn">
                      🔄 Add to Compare
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedSlider;
