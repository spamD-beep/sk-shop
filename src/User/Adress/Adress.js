import React, { useState } from "react";
import myLis from "../../assets/img/myList.jpg";
import { Link } from "react-router-dom";
import "../../css/style.css";
import { FaUser, FaMapMarkerAlt, FaHeart, FaShoppingBag, FaSignOutAlt } from "react-icons/fa";

const Adress = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div className="mylist-container">
      {/* Left Sidebar */}
      <div className="sidebar">
        <div className="profile">
          <img src={myLis} alt="Profile" className="profile-img" />
          <p className="profile-name">John Doe</p>
        </div>

        <ul className="menu">
          <li>
            <Link to="/my-list">
              <FaUser className="menu-icon" /> My Profile
            </Link>
          </li>
          <li>
            <Link to="/Adress">
              <FaMapMarkerAlt className="menu-icon" /> Address
            </Link>
          </li>
          <li className="active">
            <Link to="/my-list">
              <FaHeart className="menu-icon" /> My List
            </Link>
          </li>
          <li>
            <Link to="/my-list">
              <FaShoppingBag className="menu-icon" /> My Orders
            </Link>
          </li>
          <li>
            <FaSignOutAlt className="menu-icon" /> Logout
          </li>
        </ul>
      </div>

      {/* Right Content */}
      <div className="content" style={{ height: "30vh" }}>
        <h2 className="address-title">Address</h2>

        <div className="address-empty" onClick={() => setShowDrawer(true)}>
          Add Address
        </div>
      </div>

      {/* Slide Drawer */}
      {showDrawer && (
        <div className="drawer-overlay" onClick={() => setShowDrawer(false)}>
          <div
            className="drawer"
            onClick={(e) => e.stopPropagation()} // stop overlay close
          >
            <div className="drawer-header">
              <h3 style={{fontSize:"13pt",fontWeight:"700"}}>Add Delivery Address</h3>
              <button className="close-btn" onClick={() => setShowDrawer(false)}>×</button>
            </div>

            <div className="drawer-body">
              <input type="text" placeholder="Address Line 1" />
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State" />
              <input type="text" placeholder="Pincode" />
              <input type="text" placeholder="Country" />
              <input type="number" placeholder="+92" />
              <input type="text" placeholder="Landmark" />

              <div className="address-type">
                <label><input type="radio" name="type" /> Home</label>
                <label><input type="radio" name="type" /> Office</label>
              </div>
                <input type="submit" className="save-btn" value="SAVE"/>
            
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Adress;
