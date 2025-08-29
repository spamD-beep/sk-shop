import React, { useState, useEffect } from "react";
import { MdDelete, MdClose } from "react-icons/md";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, [isOpen]);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const shipping = 8;
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const total = subtotal + shipping;

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="cart-overlay"></div>}

      <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Shopping Cart ({cartItems.length})</h2>
          <button onClick={onClose} className="close-btn">
            <MdClose size={24} />
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Qty: {item.qty}</p>
                  <p className="price">Price: ${item.price}</p>
                </div>
                <button onClick={() => removeItem(item.id)} className="delete-btn">
                  <MdDelete size={20} />
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <>
            <div className="cart-summary">
              <div className="rows">
                <span>{cartItems.length} item(s)</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="rows">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="rows total">
                <span>Total (tax excl.)</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="cart-footer">
              <button className="view-btn">VIEW CART</button>
              <button className="checkout-btn"><Link to="/checkout">CHECKOUT</Link></button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
