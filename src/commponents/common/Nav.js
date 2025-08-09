import React from "react";
import "../../css/style.css";
import { Link } from "react-router-dom";
import Aside from "./Aside";
import { MdOutlineRocketLaunch } from "react-icons/md";

const Nav = () => {
  const nav = [
    {
      label: "Home",
      psth: "/",
    },
    {
      label: "Fashion",
      path: "/Fashion",
    },
    {
      label: "Electronics",
      path: "/Electronics",
    },
    {
      label: "Bags",
      path: "/Bags",
    },
    {
      label: "Footwear",
      path: "/Footwear",
    },
    {
      label: "Gloceries",
      path: "/Groceries",
    },
    {
      label: "Beauty",
      path: "/Beauty",
    },
    {
      label: "Wellness",
      path: "/Wellness",
    },
    {
      label: "Jewellery",
      path: "/Jewelery",
    },
  ];
  return (
    <div div className="container-fluid navs">
      <Aside />
      <div className="row navrow">
        <div className="col-2 navitem">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-align-left-icon lucide-align-left"
          >
            <path d="M15 12H3" />
            <path d="M17 18H3" />
            <path d="M21 6H3" />
          </svg>
          <div>CATEGORIES</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-down-icon lucide-chevron-down"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
        <div className="col-7 navbar">
          <ul className="">
            {nav.map((nav, index) => (
              <li key={index}>
                <Link to={nav.path}>{nav.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-3 Fre-Inter">
          <span>
            <MdOutlineRocketLaunch style={{fontWeight:"bold", fontSize:"12pt",marginRight:"5px"}} />
            Free Intrenational Delivery
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
