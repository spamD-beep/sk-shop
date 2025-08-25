import React, { useState } from 'react'
import "./fashion.css";
import "../../../css/style.css";
import { useParams } from 'react-router-dom';
import Rating from "@mui/material/Rating";
import { CiHeart } from "react-icons/ci";
import { MdOutlineZoomOutMap, MdClose } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { useGetAllProductsQuery } from '../../../api/productApi';


const Category = () => {
  const { category,subcategory  }=useParams()
const {data:allItems=[]}=useGetAllProductsQuery()
  const [price, setPrice] = useState(0);
  const ratings = [5, 4, 3, 2, 1];
  const normalize = (str = "") =>
  str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let products=allItems;


if (category && subcategory) {
    // agar category + subcategory dono hain
    products = allItems.filter(
      (p) =>
        normalize(p.productCat) === normalize(category) &&
        normalize(p.productSubCat) === normalize(subcategory)
    );
  } else if (category) {
  products = allItems.filter(
    (p) => normalize(p.productCat) === normalize(category)
  );
} 
    
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedSize, setSelectedSize] = useState('S');
    const [quantity, setQuantity] = useState(1);
  
    const handleSort = (e) => {
      const value = e.target.value;
      let sortedProducts = [...products];
  
      if (value === "lowToHigh") {
        sortedProducts.sort((a, b) => a.oprice - b.oprice);
      } else if (value === "highToLow") {
        sortedProducts.sort((a, b) => b.oprice - a.oprice);
      } else if (value === "rating") {
        sortedProducts.sort((a, b) => b.rating - a.rating);
      } else if (value === "name") {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      }
  
      return sortedProducts;
    };
  
    const handleZoomClick = (product) => {
      setSelectedProduct(product);
      setShowPopup(true);
    };
  
    const handleClosePopup = () => {
      setShowPopup(false);
      setSelectedProduct(null);
    };
  
    const handleAddToCart = () => {
      alert(`Added ${quantity} item(s) of size ${selectedSize} to cart!`);
      handleClosePopup();
    };

  return (
    <div className='mainCat' >
    <div className='leftCat'>
      <div className="category ">
        <div className='d-flex  p-3 justify-content-between'>
          <h3>Shop By Category</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-chevron-down-icon lucide-chevron-down">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>

        <div className='checkbox'>
          {["Fashion", "Electrons", "Bags", "Footwear", "Grocery", "Beauty", "Wellness", "Jewelery"].map((cat, idx) => (
            <div key={idx} className='d-flex align-items-center'>
              <input type="checkbox" />{cat}
            </div>
          ))}
        </div>
      </div>

      {/* Filter By Price */}
      <div className='filter'>
        <div className='d-flex p-3 justify-content-between'>
          <h3>Filter By Price</h3>
        </div>


        <div className='range d-flex justify-content-center'>
          <input
            type="range"
            min="0"
            max="60000"
            step="100"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        {/* Price Labels */}
        <div className="d-flex justify-content-between px-2 py-2">
          <span style={{fontSize:"10pt"}}>From: Rs 0</span>
          <span style={{fontSize:"10pt"}}>From: Rs {price.toLocaleString()}</span>
        </div>
      </div>
          <div className='rating'>
        <div className='d-flex p-3 justify-content-between'>
          <h3>Filter By Rating</h3>
        </div>
         <div className="rating-filter">
      {ratings.map((yellowStars, idx) => (
        <label key={idx} className="rating-option">
          <input type="checkbox" />
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={`star ${i < yellowStars ? 'yellow' : 'transparent'}`}
            >
              ★
            </span>
          ))}
        </label>
      ))}
    </div>
        </div>
        </div>
        <div className='sec'>
        <div className="productBar">
                <div className="sorting">
                  <span className="TotalProducts" style={{ color: "rgb(66, 66, 66)", fontSize: "14pt" }}>
                    <RxDashboard style={{fontSize:"20pt",fontWeight:"800",color:"rgb(66, 66, 66)"}}/>
                    <span> There are {products.length} products</span>
                  </span>
                  
                  <div>
                    <span style={{ color: "rgb(66, 66, 66)", fontSize: "14pt" }}>Sort By </span>
                    <select onChange={handleSort} style={{ padding: "5px",fontSize:"12pt", borderRadius: "5px",marginLeft:"5px" }}>
                      <option value="">Default</option>
                      <option value="lowToHigh">Price: Low to High</option>
                      <option value="highToLow">Price: High to Low</option>
                      <option value="rating">Rating</option>
                      <option value="name">Name (A-Z)</option>
                    </select>
                  </div>
                </div>
              </div>
        
              <div className="proGrid">
                {products.map((product) => (
                  <div key={product._id} className="proItem">
                    <div className="discount">{`${product.productDiscount} %`}</div>
                    <div className="imgItem">
                      <img src={product.image.url} alt={product.productName} />
                      <div className="icons">
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            justifyContent: "center",
                            display: "flex",
                            alignItems: "center",
                            background: "white",
                            borderRadius: "50%",
                            boxShadow: "1px 1px 15px gray",
                          }}
                          onClick={() => handleZoomClick(product)}
                        >
                          <MdOutlineZoomOutMap
                            style={{ fontSize: "15pt", fontWeight: "800", cursor: "pointer" }}
                          />
                        </div>
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            justifyContent: "center",
                            background: "white",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            boxShadow: "1px 1px 15px gray",
                          }}
                        >
                          <CiHeart style={{ fontSize: "15pt", fontWeight: "800", cursor: "pointer" }} />
                        </div>
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            justifyContent: "center",
                            background: "white",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "50%",
                            boxShadow: "1px 1px 15px gray",
                          }}
                        >
                          <IoIosGitCompare
                            style={{ fontSize: "15pt", fontWeight: "800", cursor: "pointer" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div style={{ color: "gray", fontSize: "11pt" }}>{product.productName}</div>
                    <div className="product-description-short" style={{ color: "black", fontSize: "11pt", padding: "0px" }}>{product.productDes}</div>
                    <Rating value={product.productRating} precision={0.5} readOnly size="small" />
                    <div
                      className="price"
                      style={{ display: "flex", width: "100%", justifyContent: "space-between", gap: "10px" }}
                    >
                      <div
                        style={{
                          color: "gray",
                          fontSize: "11pt",
                          fontWeight: "600",
                          textDecoration: "line-through",
                        }}
                      >
                        ${product.productOldPrice}
                      </div>
                      <div style={{ color: "red", fontSize: "11pt", fontWeight: "600" }}>
                        ${product.productPrice}
                      </div>
                    </div>
                    <button className="cartBtn">
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
                      <span>Add to Cart</span>
                    </button>
                  </div>
                ))}
              </div>
        
              {/* Product Detail Popup */}
              {showPopup && selectedProduct && (
                <div className="popup-overlay">
                  <div className="product-popup">
                    <button className="close-btn" onClick={handleClosePopup}>
                      <MdClose />
                    </button>
                    
                    <div className="popup-content">
                      <div className="popup-image">
                        <img src={selectedProduct.image} alt={selectedProduct.name} />
                      </div>
                      
                      <div className="popup-details">
                        <h2>{selectedProduct.name}</h2>
                        
                        <div className="brand-rating">
                          <span className="brand">Brand: Flying Machine</span>
                          <span className="rating">★★★★★ <span className="review-count">(2)</span></span>
                        </div>
                        
                        <div className="pricing">
                          <span className="current-price">${selectedProduct.lprice}</span>
                          <span className="original-price">${selectedProduct.oprice}</span>
                          <span className="discount">({Math.round((1 - selectedProduct.lprice/selectedProduct.oprice) * 100)}% off)</span>
                        </div>
                        
                        <div className="stock-info">
                          <span className="in-stock">Available In Stock: 7469 items</span>
                        </div>
                        
                        <div className="product-description">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
                          <span className="shiping">Free Shipping (Est. Delivery Time 2-3 Days)</span>
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
                              <span className="icon">💡</span> Add to Wishlist
                            </button>
                            <button className="compare-btn">
                              Add to Compare
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
      </div>
    </div>
  )
}

export default Category
