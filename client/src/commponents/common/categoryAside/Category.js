import React, { useState, useEffect } from 'react'
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
  const { category, subcategory } = useParams();
  const { data: allItems = [] } = useGetAllProductsQuery();

  const [price, setPrice] = useState(60000);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const ratings = [5, 4, 3, 2, 1];
  const categories = ["Fashion", "Electrons", "Bags", "Footwear", "Grocery", "Beauty", "Wellness", "Jewelery"];

  const normalize = (str = "") => str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // --- Filtering logic ---
  useEffect(() => {
    let products = allItems;

    if (category && subcategory) {
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

    products = products.filter((p) => {
      const priceMatch = p.productPrice <= price;
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(p.productCat);
      const ratingMatch = selectedRatings.length === 0 || selectedRatings.includes(Math.floor(p.productRating));
      return priceMatch && categoryMatch && ratingMatch;
    });

    setSortedProducts(products);
  }, [allItems, category, subcategory, price, selectedCategories, selectedRatings]);

  // --- Sorting ---
  const handleSort = (e) => {
    const value = e.target.value;
    let sorted = [...sortedProducts];

    if (value === "lowToHigh") sorted.sort((a, b) => a.productPrice - b.productPrice);
    else if (value === "highToLow") sorted.sort((a, b) => b.productPrice - a.productPrice);
    else if (value === "rating") sorted.sort((a, b) => b.productRating - a.productRating);
    else if (value === "name") sorted.sort((a, b) => a.productName.localeCompare(b.productName));

    setSortedProducts(sorted);
  };

  // --- Handlers ---
  const handleCategoryChange = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleRatingChange = (r) => {
    setSelectedRatings((prev) =>
      prev.includes(r) ? prev.filter((x) => x !== r) : [...prev, r]
    );
  };

  // --- Popup Logic ---
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSize, setSelectedSize] = useState('S');
  const [quantity, setQuantity] = useState(1);

  const handleZoomClick = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedProduct(null);
    setQuantity(1);
    setSelectedSize('S');
  };

  // --- Add to Cart ---
  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const exist = existingCart.find(item => item.id === product._id);
    const qty = product.qty || 1;

    if (exist) {
      const updatedCart = existingCart.map(item =>
        item.id === product._id ? { ...item, qty: item.qty + qty } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      existingCart.push({
        id: product._id,
        name: product.productName,
        price: product.productPrice,
        qty: qty,
        image: product.image.url,
      });
      localStorage.setItem("cart", JSON.stringify(existingCart));
    }

    alert(`Successfully added ${product.productName} to cart!`);
  };

  return (
    <div className='mainCat'>
      <div className='leftCat'>
        {/* --- Shop By Category --- */}
        <div className="category ">
          <div className='d-flex p-3 justify-content-between'>
            <h3>Shop By Category</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-chevron-down-icon lucide-chevron-down">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>

          <div className='checkbox'>
            {categories.map((cat, idx) => (
              <div key={idx} className='d-flex align-items-center'>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => handleCategoryChange(cat)}
                />
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* --- Filter By Price --- */}
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

          <div className="d-flex justify-content-between px-2 py-2">
            <span style={{ fontSize: "10pt" }}>From: Rs 0</span>
            <span style={{ fontSize: "10pt" }}>Up to: Rs {price.toLocaleString()}</span>
          </div>
        </div>

        {/* --- Filter By Rating --- */}
        <div className='rating'>
          <div className='d-flex p-3 justify-content-between'>
            <h3>Filter By Rating</h3>
          </div>
          <div className="rating-filter">
            {ratings.map((r, idx) => (
              <label key={idx} className="rating-option">
                <input
                  type="checkbox"
                  checked={selectedRatings.includes(r)}
                  onChange={() => handleRatingChange(r)}
                />
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={`star ${i < r ? 'yellow' : 'transparent'}`}>★</span>
                ))}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* --- Products Section --- */}
      <div className='sec'>
        <div className="productBar">
          <div className="sorting">
            <span className="TotalProducts" style={{ color: "rgb(66, 66, 66)", fontSize: "14pt" }}>
              <RxDashboard style={{ fontSize: "20pt", fontWeight: "800", color: "rgb(66, 66, 66)" }} />
              <span> There are {sortedProducts.length} products</span>
            </span>
            
            <div>
              <span style={{ color: "rgb(66, 66, 66)", fontSize: "14pt" }}>Sort By </span>
              <select onChange={handleSort} style={{ padding: "5px", fontSize: "12pt", borderRadius: "5px", marginLeft: "5px" }}>
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
          {sortedProducts.map((product) => (
            <div key={product._id} className="proItem">
              <div className="discount">{`${product.productDiscount} %`}</div>
              <div className="imgItem">
                <img src={product.image.url} alt={product.productName} />
                <div className="icons">
                  <div onClick={() => handleZoomClick(product)} style={{width:"30px",height:"30px",display:"flex",alignItems:"center",justifyContent:"center",background:"white",borderRadius:"50%",boxShadow:"1px 1px 15px gray"}}>
                    <MdOutlineZoomOutMap style={{fontSize:"15pt",fontWeight:"800",cursor:"pointer"}} />
                  </div>
                  <div style={{width:"30px",height:"30px",display:"flex",alignItems:"center",justifyContent:"center",background:"white",borderRadius:"50%",boxShadow:"1px 1px 15px gray"}}>
                    <CiHeart style={{fontSize:"15pt",fontWeight:"800",cursor:"pointer"}} />
                  </div>
                  <div style={{width:"30px",height:"30px",display:"flex",alignItems:"center",justifyContent:"center",background:"white",borderRadius:"50%",boxShadow:"1px 1px 15px gray"}}>
                    <IoIosGitCompare style={{fontSize:"15pt",fontWeight:"800",cursor:"pointer"}} />
                  </div>
                </div>
              </div>
              <div style={{ color: "gray", fontSize: "11pt" }}>{product.productName}</div>
              <div className="product-description-short" style={{ color: "black", fontSize: "11pt" }}>{product.productDes}</div>
              <Rating value={product.productRating} precision={0.5} readOnly size="small" />
              <div className="price" style={{ display:"flex",justifyContent:"space-between",width:"100%" }}>
                <div style={{color:"gray",fontSize:"11pt",fontWeight:"600",textDecoration:"line-through"}}>${product.productOldPrice}</div>
                <div style={{color:"red",fontSize:"11pt",fontWeight:"600"}}>${product.productPrice}</div>
              </div>
              <button className="cartBtn" onClick={() => handleAddToCart(product)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart">
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                <span>Add to Cart</span>
              </button>
            </div>
          ))}
        </div>

        {/* --- Popup --- */}
        {showPopup && selectedProduct && (
          <div className="popup-overlay">
            <div className="product-popup">
              <button className="close-btn" onClick={handleClosePopup}><MdClose /></button>
              <div className="popup-content">
                <div className="popup-image">
                  <img src={selectedProduct.image.url} alt={selectedProduct.productName} />
                </div>
                <div className="popup-details">
                  <h2>{selectedProduct.productName}</h2>
                  <Rating value={selectedProduct.productRating} precision={0.5} readOnly />
                  <div className="pricing">
                    <span className="current-price">${selectedProduct.productPrice}</span>
                    <span className="original-price">${selectedProduct.productOldPrice}</span>
                    <span className="discount">({Math.round((1-selectedProduct.productPrice/selectedProduct.productOldPrice)*100)}% off)</span>
                  </div>
                  <div className="product-description"><p>{selectedProduct.productDes}</p></div>
                  <div className="size-selection">
                    <h3>SIZE:</h3>
                    <div className="size-options">
                      {["S","M","L","XL"].map(size => (
                        <button key={size} className={`size-btn ${selectedSize===size?"selected":""}`} onClick={()=>setSelectedSize(size)}>{size}</button>
                      ))}
                    </div>
                  </div>
                  <div className="quantity-selection">
                    <label htmlFor="quantity">Quantity:</label>
                    <input id="quantity" type="number" min="1" max="10" value={quantity} onChange={(e)=>setQuantity(parseInt(e.target.value)||1)} />
                  </div>
                  <div className="action-buttons">
                    <button className="add-to-cart-btn" onClick={()=>handleAddToCart({...selectedProduct, qty: quantity})}>ADD TO CART</button>
                    <div className="secondary-actions">
                      <button className="wishlist-btn">❤️ Add to Wishlist</button>
                      <button className="compare-btn">⇄ Add to Compare</button>
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
