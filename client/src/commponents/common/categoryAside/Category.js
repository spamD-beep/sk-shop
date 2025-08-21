import React, { useState } from 'react'
import '../../../css/style.css'

const Category = ({ children }) => {
  const [price, setPrice] = useState(0);
  const ratings = [5, 4, 3, 2, 1];

  return (
    <div className='mainCat' >
    <div className='leftCat'>
      <div className="category ">
        <div className='d-flex  p-3 justify-content-between'>
          <h3>Shop By Category</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-chevron-down-icon lucide-chevron-down">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>

        <div className='checkbox'>
          {["Fashion", "Electrons", "Bags", "Footwear", "Grocery", "Beauty", "Wellness", "Jewelery"].map((cat, idx) => (
            <div key={idx} className='d-flex align-items-center'>
              <input type="checkbox" />{cat}
            </div>
          ))}
        </div>
      </div>

      {/* Filter By Price */}
      <div className='filter'>
        <div className='d-flex p-3 justify-content-between'>
          <h3>Filter By Price</h3>
        </div>


        <div className='range d-flex justify-content-center'>
          <input
            type="range"
            min="0"
            max="60000"
            step="100"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        {/* Price Labels */}
        <div className="d-flex justify-content-between px-2 py-2">
          <span style={{fontSize:"10pt"}}>From: Rs 0</span>
          <span style={{fontSize:"10pt"}}>From: Rs {price.toLocaleString()}</span>
        </div>
      </div>
          <div className='rating'>
        <div className='d-flex p-3 justify-content-between'>
          <h3>Filter By Rating</h3>
        </div>
         <div className="rating-filter">
      {ratings.map((yellowStars, idx) => (
        <label key={idx} className="rating-option">
          <input type="checkbox" />
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={`star ${i < yellowStars ? 'yellow' : 'transparent'}`}
            >
              ★
            </span>
          ))}
        </label>
      ))}
    </div>
        </div>
        </div>
        <div className='sec'>
      {children}
      </div>
    </div>
  )
}

export default Category
