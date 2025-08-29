import React, { useState, useEffect } from "react";
import { usePlaceOrderMutation } from "../api/orderApi";
import "./Cart.css";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [placeOrder, { isLoading }] = usePlaceOrderMutation();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const shipping = 8;
  const total = subtotal + shipping;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem("user"));
const userId = user?.id || user?._id;

const orderData = {
  userId,
  items: cartItems.map((item) => ({
    productId: item._id || item.id,
    name: item.name || "Unknown Product",
    image: item.image || "",
    qty: item.qty,
    price: item.price,
  })),
  shippingInfo: {
    name: shippingInfo.name,
    email: shippingInfo.email,
    phone: shippingInfo.phone,
    address: shippingInfo.address,
    city: shippingInfo.city,
    pincode: shippingInfo.pincode,
  },
  subtotal,
  shipping,
  total,
};

      const res = await placeOrder(orderData).unwrap();

      alert("Order placed successfully!");
      localStorage.removeItem("cart");
      setCartItems([]);
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        pincode: "",
      });
    } catch (error) {
      alert(error?.data?.message || "Something went wrong!");
      console.error("Order failed:", error);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-content">
        {/* Left: Billing Form */}
        <div className="checkout-form">
          <h3>Billing Information</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
            <input type="text" name="address" placeholder="Full Address" value={formData.address} onChange={handleChange} required />
            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
            <input type="text" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} required />

            <button type="submit" className="place-order-btn" disabled={isLoading}>
              {isLoading ? "Placing Order..." : "Place Order"}
            </button>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="checkout-summary">
          <h3>Order Summary</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item._id || item.id} className="summary-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>Qty: {item.qty}</p>
                </div>
                <p>Rs. {item.price * item.qty}</p>
              </li>
            ))}
          </ul>

          <div className="summary-totals">
            <div className="row">
              <span>Subtotal</span>
              <span>Rs. {subtotal}</span>
            </div>
            <div className="row">
              <span>Shipping</span>
              <span>Rs. {shipping}</span>
            </div>
            <div className="row total">
              <span>Total</span>
              <span>Rs. {total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
