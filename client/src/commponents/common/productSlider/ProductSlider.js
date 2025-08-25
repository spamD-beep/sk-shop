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
import { useGetAllProductsQuery } from '../../../api/productApi';


const ProductSlider = () => {
  const {data:product=[]}=useGetAllProductsQuery()
  const JeweleryProduct=product.filter(p=>p.productRating === 5)  
 const [selectedProduct, setSelectedProduct] = useState(null);
   const [quantity, setQuantity] = useState(1);
   const [selectedSize, setSelectedSize] = useState("M");


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
        {JeweleryProduct.map((pro) => (
          <SwiperSlide key={pro._id} className="promain">
            <div className='discount'>{`${pro.productDiscount} %`}</div>
            <div className='imgItem'>
            <div style={{width:"100%",height:"200px",textAlign:"center"}}>
              <img src={pro.image.url} style={{ height: '100%', width: "100%" }} />
              </div>
              <div className='icons'>
                <div 
                  style={{ width: "30px", height: "30px", textAlign: "center", background: "white", borderRadius: "50%", boxShadow: "1px 1px 15px gray" }}
                  onClick={() => setSelectedProduct(pro)}
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
            <div style={{ padding: "5px", paddingBottom: "10px", display: "flex", flexDirection: "column", gap: "2px" }}>
              <div style={{ color: 'gray', fontSize: '10pt' }}>{pro.productBrand}</div>
              <div style={{ color: 'black', fontSize: '10pt', padding: '0px' }} className='product-description-truncate'>
                {pro.productDes}
              </div>
              <Rating
                name="hover-feedback"
                value={pro.productRating}
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              <div className='price' style={{ display: "flex", width: "100%", justifyContent: "space-between", gap: "10px" }}>
                <div style={{ color: "gray", fontSize: "10pt", textDecoration: "line-through" }}>${pro.productOldPrice}</div>
                <div style={{ color: "red", fontSize: "10pt" }}>${pro.productPrice}</div>
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
                <img src={selectedProduct.image.url}  />
              </div>
              
              <div className="popup-details">
                <h2>{selectedProduct.productName}</h2>
                
                <div className="brand-rating">
                  <span className="brand">Brand: {selectedProduct.productBrand}</span>
                  <span className="rating">★★★★★ <span className="review-count">(2)</span></span>
                </div>
                
                <div className="pricing">
                  <span className="current-price">${selectedProduct.productPrice}</span>
                  <span className="original-price">${selectedProduct.productOldPrice}</span>
                  <span className="discount">({`${selectedProduct.productDiscount}%`} OFF)</span>
                </div>
                
                <div className="stock-info">
                  <span className="in-stock">Available In Stock: {selectedProduct.productStock} items</span>
                </div>
                
                <div className="product-description">
                  <p>
                    {selectedProduct.productDes}
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

export default ProductSlider;
