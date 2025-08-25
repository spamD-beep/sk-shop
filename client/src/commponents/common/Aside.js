import React, { useState } from 'react';
import '../../css/style.css';
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { useGetAllCategoriesQuery } from '../../api/categoryApi';

const Aside = ({ open, close }) => {
  const { data: aside = [], isLoading } = useGetAllCategoriesQuery();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <aside className={`${open ? "closeAside" : "aside"}`}>
      <div className='head'>
        <span>Shop By Categories</span>
        <IoClose
          onClick={close}
          style={{ fontSize: "15pt", color: "rgb(66,66,66)", cursor: "pointer" }}
        />
      </div>

      <ul>
        {isLoading ? (
          <li>Loading...</li>
        ) : (
          aside.map((item, index) => (
            <li key={item._id || index}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Link to={`/${item.path || item.categoryName.toLowerCase()}`}>{item.categoryName}</Link>

                {item.subCategories && item.subCategories.length > 0 && (
                  <span
                    onClick={() => toggleMenu(index)}
                    style={{ cursor: "pointer" }}
                  >
                    {openIndex === index ? (
                      <CiSquareMinus style={{ fontSize: "16pt" }} />
                    ) : (
                      <CiSquarePlus style={{ fontSize: "16pt" }} />
                    )}
                  </span>
                )}
              </div>

              {item.subCategories && openIndex === index && (
                <ul className="pl-6 mt-1 asideSub">
                  {item.subCategories.map((sub, idx) => (
                    <li key={sub._id || idx}>
                      <Link to={`/${item.path || item.categoryName.toLowerCase()}/${
                                    sub.path ||
                                    sub.subCategoryName.toLowerCase()
                                  }`}
                      >{sub.subCategoryName}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))
        )}
      </ul>
    </aside>
  );
};

export default Aside;
