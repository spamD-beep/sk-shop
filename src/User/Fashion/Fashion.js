import React from "react";
import "./fashion.css";
import Rating from "@mui/material/Rating";

const products = [
  { id: 1, name: "Nike Shoes", price: 2500, rating: 4.5, image: "/img/pro1.jpg" },
  { id: 2, name: "Smart Watch", price: 3500, rating: 4, image: "/img/pro2.jpg" },
  { id: 3, name: "Headphones", price: 1800, rating: 5, image: "/img/pro3.jpg" },
  { id: 4, name: "Laptop Bag", price: 2200, rating: 3.5, image: "/img/pro4.jpg" },
  { id: 5, name: "Gaming Mouse", price: 1500, rating: 4.2, image: "/img/pro5.jpg" },
  { id: 6, name: "Keyboard", price: 1200, rating: 3.8, image: "/img/pro6.jpg" },
  { id: 7, name: "iPhone Case", price: 900, rating: 4.7, image: "/img/pro7.jpg" },
  { id: 8, name: "LED Monitor", price: 14500, rating: 4.9, image: "/img/pro8.jpg" },
];

const Fashion = () => {
  return (
    <div className="proGrid">
      {products.map((product) => (
        <div key={product.id} className="proItem">
          <img src={product.image} alt={product.name} />
          <span className="proName">{product.name}</span>
          <span className="proPrice">Rs. {product.price}</span>
          <Rating value={product.rating} precision={0.5} readOnly size="small" />
          <button className="cartBtn">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Fashion;
