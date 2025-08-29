import React,{useState} from "react";
import "../../css/style.css";
import Logo from "../../assets/img/LogoReal.jpg";
import Nav from "./Nav.js";
import { Link } from "react-router-dom";
import Cart from "../Cart.js";
import { FaUser } from "react-icons/fa";
const Header = () => {
   const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <div className="main">
        <div className="container-fluid">
          <div className="row border-top-0 border-bottom-0 d-flex header justify-content-between w-100 align-items-center">
            <div className="col-6">
              <div className="top-p">
                Get up to 50% off new season styles, limited time only
              </div>
            </div>
            <div className="col-6 d-flex help-center justify-content-end align-items-center gap-3">
              <Link to="/help-center" className="border-end border-end-1 border-0">
                Help Center
              </Link>
              <Link to="/order-tracking" className="border-end border-end-1 border-0">
                Order Tracking
              </Link>
              <select className="border-end border-end-1 border-0">
                <option disabled selected>
                  {" "}
                  English{" "}
                </option>
              </select>
              <select className="border-0">
                <option disabled selected>
                  {" "}
                  USD{" "}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="container-fluid second">
          <div className="row logo py-3">
            <div className="col-3 img">
              <img src={Logo} alt="logo" />
            </div>
            <div className="col-6 serch-box">
              <input
                type="text"
                style={{padding:"10px",fontSize:"14pt"}}
                className="w-100 search border-0"
                placeholder="Search for products..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-search-icon lucide-search"
              >
                <path d="m21 21-4.34-4.34" />
                <circle cx="11" cy="11" r="8" />
              </svg>
            </div>
            <div className="col-3 login">
             <FaUser style={{ fontSize:"14pt",cursor:"pointer"}}/>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-git-compare-arrows-icon lucide-git-compare-arrows"
              >
                <circle cx="5" cy="6" r="3" />
                <path d="M12 6h5a2 2 0 0 1 2 2v7" />
                <path d="m15 9-3-3 3-3" />
                <circle cx="19" cy="18" r="3" />
                <path d="M12 18H7a2 2 0 0 1-2-2V9" />
                <path d="m9 15 3 3-3 3" />
              </svg>
              <Link to="/my-list">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart-icon lucide-heart"
              >
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
              </svg>
              </Link>
              <svg
              onClick={() => setIsCartOpen(true)}
              style={{cursor:"pointer"}}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Nav/>
    </>
  );
};

export default Header;
