import React, { useState, useEffect } from "react";
import profileImg from "../../assets/img/myList.jpg"; // profile image
import { Link } from "react-router-dom";
import "../../css/style.css";
import { FaUser, FaMapMarkerAlt, FaHeart, FaShoppingBag, FaSignOutAlt } from "react-icons/fa";

const Account = () => {
  
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    role: ""
  });

  // Load logged-in user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/signin";
  };

  // Save edited info to localStorage
  
  return (
    <div className="mylist-container">
      {/* Left Sidebar */}
      <div className="sidebar">
        <div className="profile">
          <img src={profileImg} alt="Profile" className="profile-img" />
          <p className="profile-name">{user.firstName} {user.lastName}</p>
        </div>

        <ul className="menu">
          <li className="active">
            <Link to="/my-account">
              <FaUser className="menu-icon" /> My Profile
            </Link>
          </li>
          <li>
            <Link to="/Adress">
              <FaMapMarkerAlt className="menu-icon" /> Address
            </Link>
          </li>
          <li>
            <Link to="/my-list">
              <FaHeart className="menu-icon" /> My List
            </Link>
          </li>
          <li>
            <Link to="/my-orders">
              <FaShoppingBag className="menu-icon" /> My Orders
            </Link>
          </li>
          <li onClick={handleLogout}>
            <FaSignOutAlt className="menu-icon" /> Logout
          </li>
        </ul>
      </div>

    
      <div className="content">
      
        <h2 className="address-title" style={{color:"red"}}>My Account Info</h2>

        <div className="profile-info-card">
          <p><strong>First Name:</strong> {user.firstName}</p>
          <p><strong>Last Name:</strong> {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        
          
        </div>
      </div>

   
      
    </div>
  );
};

export default Account;
