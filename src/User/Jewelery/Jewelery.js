import React, { useState } from "react";
import "./Jewelery.css";
import "../../css/style.css";
import Rating from "@mui/material/Rating";
import cat3 from "../../assets/img/cat3.jpg";
import cat4 from "../../assets/img/cat4.jpg";
import cat5 from "../../assets/img/cat5.jpg";
import cat6 from "../../assets/img/cat6.jpg";
import cat7 from "../../assets/img/cat7.jpg";
import cat8 from "../../assets/img/cat8.jpg";
import cat9 from "../../assets/img/cat9.jpg";
import { CiHeart } from "react-icons/ci";
import { MdOutlineZoomOutMap, MdClose } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";

const initialProducts = [
  { id: 1, discount: "10%", name: "Nike Shoes", des: "this is native product and its real and good product,So what are you", oprice: 2500, lprice: 2000, rating: 4.5, image: cat3 },
  { id: 2, discount: "10%", name: "Smart Watch", des: "this is native product and its real and good product,So what are you", oprice: 3500, lprice: 2000, rating: 4, image: cat4 },
  { id: 3, discount: "10%", name: "Headphones", des: "this is native product and its real and good product,So what are you", oprice: 1800, lprice: 2000, rating: 5, image: cat5 },
  { id: 4, discount: "10%", name: "Laptop Bag", des: "this is native product and its real and good product,So what are you", oprice: 2200, lprice: 2000, rating: 3.5, image: cat5 },
  { id: 5, discount: "10%", name: "Gaming Mouse", des: "this is native product and its real and good product,So what are you", oprice: 1500, lprice: 2000, rating: 4.2, image: cat6 },
  { id: 6, discount: "10%", name: "Keyboard", des: "this is native product and its real and good product,So what are you", oprice: 1200, lprice: 2000, rating: 3.8, image: cat7 },
  { id: 7, discount: "10%", name: "iPhone Case", des: "this is native product and its real and good product,So what are you", oprice: 900, lprice: 2000, rating: 4.7, image: cat8 },
  { id: 8, discount: "10%", name: "LED Monitor", des: "this is native product and its real and good product,So what are you", oprice: 14500, lprice: 2000, rating: 4.9, image: cat9 },
];

const Jewelery = () => {
  const [products, setProducts] = useState(initialProducts);
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

    setProducts(sortedProducts);
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
    <>
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
          <div key={product.id} className="proItem">
            <div className="discount">{product.discount}</div>
            <div className="imgItem">
              <img src={product.image} alt={product.name} />
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
            <div style={{ color: "gray", fontSize: "11pt" }}>{product.name}</div>
            <div style={{ color: "black", fontSize: "11pt", padding: "0px" }}>{product.des}</div>
            <Rating value={product.rating} precision={0.5} readOnly size="small" />
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
                ${product.oprice}
              </div>
              <div style={{ color: "red", fontSize: "11pt", fontWeight: "600" }}>
                ${product.lprice}
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
    </>
  );
};

export default Jewelery;