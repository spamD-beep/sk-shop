import React, { useState } from 'react'
import { Link } from "react-router-dom";   // ✅ Router se navigation
import '../styles.css'
import dashLogo from '../../assets/img/logo.png'
import user from '../../assets/img/footer3.png'

// Icons
import { RiMenu2Fill } from "react-icons/ri";
import { FaBell, FaUser, FaProductHunt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { TfiLayoutSlider } from "react-icons/tfi";
import { MdProductionQuantityLimits, MdDriveFolderUpload, MdOutlineCategory } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { FaRegListAlt } from "react-icons/fa";   // ✅ FaRegRectangleList replace
import { TbCategoryPlus } from "react-icons/tb";

const Header = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const toggle = () => {
    setOpen(prev => !prev);
  };

  const handleSubmenu = (index) => {
    setSubmenuOpen(submenuOpen === index ? null : index); 
  };

  const aside = [
    {
      icon: <RxDashboard />,
      label: "Dashboard",
      path: "/Dashboard"
    },
    {
      icon: <TfiLayoutSlider />,
      label: "Home Slides",
      children: [
        { label: "Home Banner List", icon: <TfiLayoutSlider />, path: "/HomeBannerSlider" },
        { label: "Add Banner Slide", icon: <MdDriveFolderUpload />, path: "/AddHomeSlider" }
      ]
    },
    {
      icon: <FaUser />,
      label: "User",
      path: "/User"
    },
    {
      icon: <MdProductionQuantityLimits />,
      label: "Products",
      children: [
        { label: "Product List", icon: <FaProductHunt />, path: "/Products" },
        { label: "Product Upload", icon: <MdDriveFolderUpload />, path: "/AddProducts" }
      ]
    },
    {
      icon: <MdOutlineCategory />,
      label: "Category",
      children: [
        { label: "Category List", icon: <FaRegListAlt />, path: "/Category" },
        { label: "Category Upload", icon: <MdDriveFolderUpload />, path: "/AddCategory" },
        { label: "Sub Category List", icon: <TbCategoryPlus />, path: "/SubCategory" },
        { label: "Add Sub Category ", icon: <MdDriveFolderUpload />, path: "/AddSubCategory" }
      ]
    },
    {
      icon: <FiPackage />,
      label: "Orders",
      path: "/Orders"
    },
  ];

  return (
    <div className='container-fluid'>
      <div className='row'>
        {/* Sidebar */}
        <div className={`col-2 ${open ? "aside" : "d-none"}`}>
          <div className='logo py-3 text-center'>
            <img src={dashLogo} style={{ width: "120px" }} alt="Logo" />
          </div>
          <ul className="menu ul">
            {aside.map((item, index) => (
              <li key={index} className="menu-item">
                {/* ✅ Agar children hain to toggle karega, warna direct Link */}
                {item.children ? (
                  <div 
                    className="menu-link d-flex align-items-center justify-content-between"
                    onClick={() => handleSubmenu(index)}
                  >
                    <div className="d-flex align-items-center gap-2">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    <IoIosArrowDown 
                      className={`arrow ${submenuOpen === index ? "rotate" : ""}`}
                    />
                  </div>
                ) : (
                  <Link to={item.path} className="menu-link d-flex align-items-center gap-2">
                    <div className='d-flex align-items-center gap-2'>
                    {item.icon}
                    <span>{item.label}</span>
                    </div>
                  </Link>
                )}

                {/* ✅ Submenu */}
                {item.children && (
                  <ul className={`submenu ${submenuOpen === index ? "open" : ""}`}>
                    {item.children.map((child, idx) => (
                      <li key={idx} className="submenu-item">
                        <Link to={child.path} className="d-flex align-items-center gap-2">
                          {child.icon}
                          <span>{child.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className={`${open ? "col-10 p-0" : "col p-0"}`}>
          <div className='row px-3'>
            <div className='col burder d-flex justify-content-between align-items-center'>
              <RiMenu2Fill
                onClick={toggle}
                style={{ fontSize: "20pt", cursor: "pointer" }}
              />
              <span style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                <FaBell style={{ fontSize: "18pt" }} />
                <img
                  src={user}
                  style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                  alt="User"
                />
              </span>
            </div>
          </div>
          <div className='mainDash p-3'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
