import React, { useState } from "react";
import myLis from "../../assets/img/myList.jpg";
import { Link } from "react-router-dom";
import "../../css/style.css";

// 🟢 React Icons import
import { FaUser, FaMapMarkerAlt, FaHeart, FaShoppingBag, FaSignOutAlt } from "react-icons/fa";

const MyList = () => {
  const [myList, setMyList] = useState([]);

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
          <li >
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
      <div className="content">
        <div style={{ borderBottom: "1px solid lightgray" }}>
          <h2 className="title">My List</h2>
          <p className="subtitle">
            There are <span>{myList.length}</span> products in your My List
          </p>
        </div>

        {myList.length === 0 ? (
          <div className="empty-list">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
              alt="Empty List"
              className="empty-img"
            />
            <p className="empty-text">My List is currently empty</p>
            <button className="btn">CONTINUE SHOPPING</button>
          </div>
        ) : (
          <div className="grid">
            {myList.map((item, index) => (
              <div key={index} className="card">
                <img src={item.image} alt={item.name} className="card-img" />
                <h3 className="card-name">{item.name}</h3>
                <p className="card-price">${item.price}</p>
                <button className="remove-btn">Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyList;
