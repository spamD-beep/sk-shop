import React, { useState } from "react";
import "../../css/style.css";
import { Link } from "react-router-dom";
import { MdOutlineRocketLaunch } from "react-icons/md";
import Aside from "./Aside";
import { useGetAllCategoriesQuery } from "../../api/categoryApi"; // RTK Query

const Nav = () => {
  const [open, setOpen] = useState(true);
  const openAside = () => setOpen((prev) => !prev);
  const closeAside = () => setOpen((prev) => !prev);

  const { data: categories = [], isLoading } = useGetAllCategoriesQuery();

  // 👇 Debug check
  console.log("Categories from API:", categories);

  return (
    <>
      <div className={`${!open ? "overlay" : ""}`}></div>
      <div className="container-fluid navs">
        <Aside open={open} close={closeAside} />
        <div className="row navrow">
          <div className="col-2 navitem">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 12H3" />
              <path d="M17 18H3" />
              <path d="M21 6H3" />
            </svg>
            <div> CATEGORIES</div>
            <svg
              onClick={openAside}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>

          <div className="col-7 navbar">
            <ul>
            <li><Link to="/">Home</Link></li>
              {isLoading ? (
                <li>Loading...</li>
              ) : (
                categories.map((cat) => {
                  console.log("Category:", cat); // 👈 Check karo subCategories ki value

                  return (
                    <li
                      key={cat._id}
                      className={cat.subCategories?.length ? "has-submenu" : ""}
                    >
                      <Link
                        to={`/${cat.path || cat.categoryName.toLowerCase()}`}
                      >
                        {cat.categoryName}
                      </Link>

                      {cat.subCategories && cat.subCategories.length > 0 && (
                        <ul className="submenuNav">
                          {cat.subCategories.map((sub) => {
                            console.log(
                              "SubCategory of",
                              cat.categoryName,
                              ":",
                              sub
                            ); // 👈 Debug
                            return (
                              <li key={sub._id}>
                                <Link
                                  to={`/${cat.path || cat.categoryName.toLowerCase()}/${
                                    sub.path ||
                                    sub.subCategoryName.toLowerCase()
                                  }`}
                                >
                                  {sub.subCategoryName}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })
              )}
            </ul>
          </div>
              
          <div className="col-3 Fre-Inter">
            <span>
              <MdOutlineRocketLaunch
                style={{ fontSize: "12pt", marginRight: "5px" }}
              />
              Free International Delivery
            </span>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Nav;
